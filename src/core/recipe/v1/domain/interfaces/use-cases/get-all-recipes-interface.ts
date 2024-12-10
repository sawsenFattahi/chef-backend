import { Recipe } from "../../entities/recipe";

export interface GetAllRecipesInterface {
    execute: () => Promise<Recipe[]>
}