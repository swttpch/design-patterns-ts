import { TaxTypeInterface } from "../types/contracts";

export default class IPI implements TaxTypeInterface {
  calculate(amount: number) {
    return amount * 0.15;
  }
}
