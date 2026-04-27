import { DiscountStrategy } from '../discount-strategy';

export class FixedDiscount implements DiscountStrategy {
  constructor(private discountValue: number) {}

  calculate(price: number): number {
    return Math.max(0, price - this.discountValue);
  }
}