import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { PdfAdapter } from "./PdfAdapterInterface";
import { writeFile } from "fs/promises";

class PdfLibAdapter implements PdfAdapter {
  async generate(filename: string, content: string): Promise<void> {
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 30;
    page.drawText(content, {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });
    const pdfBytes = await pdfDoc.save();
    await writeFile(filename, pdfBytes);
  }
}

export default PdfLibAdapter;
