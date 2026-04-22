import { ProductDecorator } from './product/product-decorator'
import { ProductPrintDecorator } from './product/product-print-decorator'
import { TShirt } from './product/t-shirt'

const tShirt = new TShirt()
const decoratedTShirt = new ProductPrintDecorator(tShirt)
console.log(tShirt.getPrice()) // Preço
console.log(decoratedTShirt.getPrice()) // Preço com adicional

console.log(tShirt.getName()) // Nome
console.log(decoratedTShirt.getName()) // Nome com adicional
