import { Product } from './discount/product'
import { PercentageDiscount } from './discount/strategies/percentage-discount'
import { FixedDiscount } from './discount/strategies/fixed-discount'
import { NoDiscount } from './discount/strategies/no-discount'

const product = new Product('Notebook', 1000, new NoDiscount())

console.log(`Produto: ${product.name}`)
console.log(`Preço Original: $${product.price}\n`)

console.log('--- Sem Desconto ---')
console.log(`Preço Final: $${product.getPriceWithDiscount()}\n`)

product.setDiscountStrategy(new PercentageDiscount(10))
console.log('--- 10% Desconto ---')
console.log(`Preço Final: $${product.getPriceWithDiscount()}\n`)

product.setDiscountStrategy(new PercentageDiscount(25))
console.log('--- 25% Desconto ---')
console.log(`Preço Final: $${product.getPriceWithDiscount()}\n`)

product.setDiscountStrategy(new FixedDiscount(150))
console.log('--- R$150 Desconto fixo ---')
console.log(`Preço Final: $${product.getPriceWithDiscount()}\n`)

product.setDiscountStrategy(new FixedDiscount(1200))
console.log('--- R$1200 Desconto fixo (0) ---')
console.log(`Preço Final: $${product.getPriceWithDiscount()}\n`)
