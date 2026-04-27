import { DiscountStrategy } from './discount-strategy';

export class Product {
  constructor(
    public name: string,
    public price: number,
    private discountStrategy: DiscountStrategy
  ) {}

  setDiscountStrategy(strategy: DiscountStrategy): void {
    this.discountStrategy = strategy;
  }

  getPriceWithDiscount(): number {
    return this.discountStrategy.calculate(this.price);
  }
}