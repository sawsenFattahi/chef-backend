import { Recipe } from "../entities/recipe";

export interface GetAllRecipes {
    execute: () => Promise<Recipe[]>
}