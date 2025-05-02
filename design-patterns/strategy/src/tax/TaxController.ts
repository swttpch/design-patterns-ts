import { RequestHandler } from "express";
import TaxCalculator from "./TaxCalculator";
import ICMS from "./ICMS";
import IPI from "./IPI";
import ISS from "./ISS";

class TaxController {
  constructor() {}

  calculateTax: RequestHandler = (req, res) => {
    const data = req.body;
    const { amount, tax_type: taxType } = data;
    try {
      const taxCalculator = new TaxCalculator();
      let tax: number;
      switch (taxType) {
        case "ICMS":
          tax = taxCalculator.setTaxType(new ICMS()).calculate(amount);
          break;
        case "ISS":
          tax = taxCalculator.setTaxType(new ISS()).calculate(amount);
          break;
        case "IPI":
          tax = taxCalculator.setTaxType(new IPI()).calculate(amount);
          break;
        default:
          res.status(400).json({
            message: "Invalid tax type",
          });
          return;
      }

      res.status(200).json({
        tax: tax,
      });
      return;
    } catch (error) {
      res.status(400).json({
        message: "Error",
      });
    }
  };
}

export default TaxController;
