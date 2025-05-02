import { TaxTypeInterface } from "../types/contracts";

export default class TaxCalculator {
  private taxType: TaxTypeInterface | null = null;

  constructor() {}

  calculate(amount: number): number {
    if (!this.taxType) {
      throw new Error("Tax type not set");
    }
    return this.taxType.calculate(amount);
  }

  setTaxType(taxType: TaxTypeInterface): this {
    this.taxType = taxType;
    return this;
  }
}
