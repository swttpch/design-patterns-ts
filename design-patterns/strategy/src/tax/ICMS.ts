import { TaxTypeInterface } from "../types/contracts";

export default class ICMS implements TaxTypeInterface {
  calculate(amount: number) {
    return amount * 0.4;
  }
}
