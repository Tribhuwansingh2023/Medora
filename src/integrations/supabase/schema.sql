-- ==============================================================================
-- MEDORA PLATFORM - POSTGRESQL & SUPABASE PRODUCTION SCHEMA & RLS POLICIES
-- Multi-tenant Healthcare Intelligence & Medicine Platform
-- ==============================================================================

-- Enable UUID and cryptographic extensions
create extension if not exists "uuid-ossp";

-- 1. App Roles Enum
do $$
begin
  if not exists (select 1 from pg_type where typname = 'app_role') then
    create type app_role as enum ('patient', 'pharmacy', 'doctor', 'admin');
  end if;
end $$;

-- 2. User Roles Table & RBAC Helper Function
create table if not exists public.user_roles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null default 'patient',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- RBAC helper function has_role(role, user_id)
create or replace function public.has_role(_role app_role, _user_id uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  );
$$;

-- 3. User Profiles Table
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  email text,
  city text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

-- Profiles RLS
create policy "Users can view own profile or admins view all"
  on public.profiles for select
  using (auth.uid() = id or public.has_role('admin', auth.uid()));

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 4. Orders Table
create table if not exists public.orders (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  pharmacy_id text not null,
  pharmacy_name text not null,
  placed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  items jsonb not null default '[]'::jsonb,
  total numeric(10, 2) not null default 0.00,
  fulfilment text not null default 'pickup',
  prescription_id text,
  status text not null default 'accepted',
  timeline jsonb not null default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.orders enable row level security;

-- Orders RLS Multi-Tenant Isolation
create policy "Patients view own orders"
  on public.orders for select
  using (
    auth.uid() = user_id
    or public.has_role('admin', auth.uid())
    or public.has_role('pharmacy', auth.uid())
    or public.has_role('doctor', auth.uid())
  );

create policy "Patients insert own orders"
  on public.orders for insert
  with check (auth.uid() = user_id or public.has_role('admin', auth.uid()));

create policy "Patients, Pharmacists and Admins update orders"
  on public.orders for update
  using (
    auth.uid() = user_id
    or public.has_role('pharmacy', auth.uid())
    or public.has_role('admin', auth.uid())
  );

-- 5. Reminders & Dosage Adherence Table
create table if not exists public.reminders (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  medicine_name text not null,
  strength text not null,
  times text[] not null default '{}',
  start_date text not null,
  end_date text,
  instruction text not null default '',
  source_prescription_id text,
  active boolean not null default true,
  log jsonb not null default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.reminders enable row level security;

-- Reminders RLS Multi-Tenant Isolation
create policy "Patients view own reminders, doctors view assigned, admins view all"
  on public.reminders for select
  using (
    auth.uid() = user_id
    or public.has_role('doctor', auth.uid())
    or public.has_role('admin', auth.uid())
  );

create policy "Patients insert own reminders"
  on public.reminders for insert
  with check (auth.uid() = user_id or public.has_role('admin', auth.uid()));

create policy "Patients update own reminders"
  on public.reminders for update
  using (auth.uid() = user_id or public.has_role('admin', auth.uid()));

create policy "Patients delete own reminders"
  on public.reminders for delete
  using (auth.uid() = user_id or public.has_role('admin', auth.uid()));

-- 6. Prescriptions Table
create table if not exists public.prescriptions (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  file_name text not null,
  uploaded_at timestamp with time zone default timezone('utc'::text, now()) not null,
  prescriber_name text,
  status text not null default 'extracted',
  patient_name text,
  items jsonb not null default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.prescriptions enable row level security;

-- Prescriptions RLS Multi-Tenant Isolation
create policy "Prescriptions access policy"
  on public.prescriptions for select
  using (
    auth.uid() = user_id
    or public.has_role('doctor', auth.uid())
    or public.has_role('pharmacy', auth.uid())
    or public.has_role('admin', auth.uid())
  );

create policy "Patients upload own prescriptions"
  on public.prescriptions for insert
  with check (auth.uid() = user_id or public.has_role('admin', auth.uid()));

create policy "Patients, Pharmacists, and Doctors update prescriptions"
  on public.prescriptions for update
  using (
    auth.uid() = user_id
    or public.has_role('doctor', auth.uid())
    or public.has_role('pharmacy', auth.uid())
    or public.has_role('admin', auth.uid())
  );

-- 7. Cart Items Table (Multi-Device Cart Sync)
create table if not exists public.cart_items (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  medicine_id text not null,
  name text not null,
  qty integer not null default 1,
  price numeric(10, 2) not null default 0.00,
  prescription_only boolean not null default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, medicine_id)
);

alter table public.cart_items enable row level security;

create policy "Patients manage own cart"
  on public.cart_items for all
  using (auth.uid() = user_id);

-- 8. Lab Reports Table
create table if not exists public.lab_reports (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  file_name text not null,
  uploaded_at timestamp with time zone default timezone('utc'::text, now()) not null,
  panel text not null,
  values jsonb not null default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.lab_reports enable row level security;

create policy "Lab reports access policy"
  on public.lab_reports for select
  using (
    auth.uid() = user_id
    or public.has_role('doctor', auth.uid())
    or public.has_role('admin', auth.uid())
  );

create policy "Patients insert own lab reports"
  on public.lab_reports for insert
  with check (auth.uid() = user_id or public.has_role('admin', auth.uid()));

-- 9. Pharmaceutical Catalog Items Table (Static Seed with Admin Management)
create table if not exists public.catalog_items (
  id text primary key,
  brand_name text not null,
  generic_name text not null,
  composition_key text not null,
  form text not null,
  pack_size text not null,
  manufacturer text not null,
  prescription_only boolean not null default false,
  active_ingredients jsonb not null default '[]'::jsonb,
  warnings text[] not null default '{}',
  uses_summary text not null default '',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.catalog_items enable row level security;

-- Public read for catalog, admin write
create policy "Catalog items public read"
  on public.catalog_items for select
  using (true);

create policy "Catalog items admin write"
  on public.catalog_items for all
  using (public.has_role('admin', auth.uid()));

-- 10. Audit Events Table (System Compliance and Security Logging)
create table if not exists public.audit_events (
  id text primary key,
  at timestamp with time zone default timezone('utc'::text, now()) not null,
  actor text not null,
  role text,
  category text,
  action text not null,
  target text not null,
  ip text not null default '127.0.0.1',
  status text default 'success',
  details text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.audit_events enable row level security;

-- Only Admins can view audit logs
create policy "Admins read audit logs"
  on public.audit_events for select
  using (public.has_role('admin', auth.uid()));

-- System or authenticated users can record audit entries
create policy "Users and system record audit logs"
  on public.audit_events for insert
  with check (true);
