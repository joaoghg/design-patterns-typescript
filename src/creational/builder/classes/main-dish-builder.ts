import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox()

    reset(): this {
        this._meal = new MealBox()
        return this
    }
    makeMeal(): this {
        const rice = new Rice("Arroz", 5)
        const beans = new Beans("Feijão", 10)
        const meat = new Meat("Carne", 15)
        const beverage = new Beverage("Refrigerante", 5)
        const dessert = new Dessert("Sobremesa", 5)
        this._meal.add(rice, beans, meat, beverage, dessert)
        return this
    }
    makeBeverage(): this {
        const beverage = new Beverage("Refrigerante", 5)
        this._meal.add(beverage)
        return this
    }
    makeDessert(): this {
        const dessert = new Dessert("Sobremesa", 10)
        this._meal.add(dessert)
        return this
    }
    build(): MealBox {
        return this._meal
    }
}