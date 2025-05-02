import { PdfAdapter } from "./PdfAdapterInterface";

class SalesReportGenerator {
  constructor(private pdfAdapter: PdfAdapter) {}
  generate() {
    const fileName = `sales-report-${new Date().toISOString().split("T")[0]}.pdf`;
    const content = "Sales Report Content";
    this.pdfAdapter.generate(fileName, content);
  }
}

export default SalesReportGenerator;
