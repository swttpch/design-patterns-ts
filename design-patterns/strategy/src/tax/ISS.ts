import { TaxTypeInterface } from "../types/contracts";

export default class ISS implements TaxTypeInterface {
  calculate(amount: number) {
    return amount * 0.11;
  }
}
