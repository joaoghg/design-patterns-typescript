import { TreeType, ForestTree } from './tree-type';

export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;

    if (!this.treeTypes.has(key)) {
      console.log(`Creating new TreeType: ${name}`);
      this.treeTypes.set(key, new ForestTree(name, color, texture));
    }

    return this.treeTypes.get(key)!;
  }

  static getTreeTypeCount(): number {
    return this.treeTypes.size;
  }
}