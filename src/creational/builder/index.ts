import { MainDishBuilder } from "./classes/main-dish-builder"

const mainDishBuilder = new MainDishBuilder()
mainDishBuilder.makeMeal().makeDessert().build()
console.log(mainDishBuilder.build())