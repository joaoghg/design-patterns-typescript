import { DiscountStrategy } from '../discount-strategy';

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}

  calculate(price: number): number {
    return price - (price * this.percentage) / 100;
  }
}