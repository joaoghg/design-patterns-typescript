import { TreeType } from './tree-type'
import { TreeFactory } from './tree-factory'

class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType
  ) {}

  draw(): void {
    this.type.draw(this.x, this.y)
  }
}

class Forest {
  private trees: Tree[] = []

  plantTree(x: number, y: number, name: string, color: string, texture: string): void {
    const type = TreeFactory.getTreeType(name, color, texture)
    this.trees.push(new Tree(x, y, type))
  }

  draw(): void {
    console.log('\n--- Forest Drawing ---')
    this.trees.forEach((tree) => tree.draw())
  }
}

const forest = new Forest()

forest.plantTree(10, 20, 'Oak', 'Green', 'rough')
forest.plantTree(30, 40, 'Oak', 'Green', 'rough')
forest.plantTree(50, 60, 'Pine', 'Dark Green', 'smooth')
forest.plantTree(70, 80, 'Oak', 'Green', 'rough')
forest.plantTree(90, 100, 'Birch', 'White', 'smooth')

forest.draw()

console.log(`\nTotal de tipos de árvores únicos criados: ${TreeFactory.getTreeTypeCount()}`)
console.log('(Sem Flyweight: 5 objetos | Com Flyweight: 3 objetos + 5 posições)')
