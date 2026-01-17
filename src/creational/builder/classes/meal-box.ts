import { MealComposityProtocol } from "../interfaces/meal-composity-protocol";

export class MealBox implements MealComposityProtocol {
    private readonly _children: MealComposityProtocol[] = []

    add(...meal: MealComposityProtocol[]): void {
        this._children.push(...meal)
    }

    getPrice(): number {
        return this._children.reduce((acc, meal) => acc + meal.getPrice(), 0)
    }
}