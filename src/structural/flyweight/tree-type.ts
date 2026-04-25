export interface TreeType {
  name: string;
  color: string;
  texture: string;
  draw(x: number, y: number): void;
}

export class ForestTree implements TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(x: number, y: number): void {
    console.log(
      `Drawing ${this.color} ${this.name} tree with ${this.texture} texture at position (${x}, ${y})`
    );
  }
}