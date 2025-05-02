import jsPDF from "jspdf";
import { PdfAdapter } from "./PdfAdapterInterface";

class PDFjsAdapter implements PdfAdapter {
  generate(filename: string, content: string): void {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save(filename);
  }
}

export default PDFjsAdapter;
