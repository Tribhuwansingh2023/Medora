import { Prescription, PrescriptionItem } from "@/lib/domain";
import { demoPrescriptions } from "@/data/demo-catalog";

export interface OCRResult {
  prescription: Omit<Prescription, "id" | "status" | "uploadedAt">;
  items: Omit<PrescriptionItem, "id" | "userConfirmed">[];
}

export interface OCRProvider {
  extractPrescription(file: File): Promise<OCRResult>;
  name: string;
}

export class DemoOCRProvider implements OCRProvider {
  name = "Demo OCR";

  async extractPrescription(file: File): Promise<OCRResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1800));

    const lower = file.name.toLowerCase();
    let template: Prescription = demoPrescriptions[0]!;

    if (
      lower.includes("diabet") ||
      lower.includes("bp") ||
      lower.includes("heart")
    ) {
      template = demoPrescriptions[1]!;
    } else if (
      lower.includes("asthma") ||
      lower.includes("allergy") ||
      lower.includes("lung")
    ) {
      template = demoPrescriptions[2]!;
    } else if (
      lower.includes("ortho") ||
      lower.includes("pain") ||
      lower.includes("bone")
    ) {
      template = demoPrescriptions[3]!;
    } else {
      let hash = file.size;
      for (let i = 0; i < file.name.length; i++) {
        hash = (hash << 5) - hash + file.name.charCodeAt(i);
        hash |= 0;
      }
      const index = Math.abs(hash) % demoPrescriptions.length;
      template = demoPrescriptions[index] ?? demoPrescriptions[0]!;
    }

    return {
      prescription: {
        fileName: file.name.slice(0, 80),
        prescriberName: template.prescriberName,
        patientName: template.patientName,
      },
      items: template.items.map((item) => ({
        medicineText: item.medicineText,
        strength: item.strength,
        frequency: item.frequency,
        duration: item.duration,
        notes: item.notes,
        confidence: item.confidence,
      })),
    };
  }
}

// In the future, you can implement GoogleCloudVisionOCRProvider, etc.
// export class GoogleCloudVisionOCRProvider implements OCRProvider { ... }

// Current active provider
export const ocrProvider: OCRProvider = new DemoOCRProvider();
