import { ProductProtocol } from './product-protocol'

export class TShirt implements ProductProtocol {
  private name: string = 'Camiseta'
  private price: number = 50

  getName(): string {
    return this.name
  }

  getPrice(): number {
    return this.price
  }
}
