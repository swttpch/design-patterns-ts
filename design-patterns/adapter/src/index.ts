import PDFjsAdapter from "./services/PDFjsAdapter";
import PdfLibAdapter from "./services/PdfLibAdapter";
import SalesReportGenerator from "./services/SalesReportGenerator";
const pdfAdapter = new PdfLibAdapter();
const salesReport = new SalesReportGenerator(pdfAdapter);
salesReport.generate();
