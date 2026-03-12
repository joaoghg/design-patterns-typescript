export abstract class ProductComponent {
  abstract getPrice(): number

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number
  ) {
    super()
  }

  getPrice(): number {
    return this.price
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = []

  add(product: ProductComponent): void {
    this.children.push(product)
  }

  remove(product: ProductComponent): void {
    const index = this.children.indexOf(product)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }

  getPrice(): number {
    return this.children.reduce((total, child) => total + child.getPrice(), 0)
  }
}

const camiseta = new ProductLeaf('Camiseta', 50)
const calca = new ProductLeaf('Calça', 100)
const cinto = new ProductLeaf('Cinto', 40)

const productBundle = new ProductComposed()
productBundle.add(camiseta)
productBundle.add(calca)
productBundle.add(cinto)

const tablet = new ProductLeaf('Tablet', 1000)
const kindle = new ProductLeaf('Kindle', 500)
const anotherProductBundle = new ProductComposed()
anotherProductBundle.add(tablet)
anotherProductBundle.add(kindle)
productBundle.add(anotherProductBundle)
