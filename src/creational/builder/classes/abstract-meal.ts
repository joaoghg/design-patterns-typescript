import { MealComposityProtocol } from "../interfaces/meal-composity-protocol";

export abstract class AbstractMeal implements MealComposityProtocol {
    constructor(private name: string, private price: number) { }

    getPrice(): number {
        return this.price
    }
}