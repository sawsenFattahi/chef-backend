import { Recipe } from "../../entities/recipe";

export interface CreateRecipeInterface {
    execute: (recipe: Recipe) => Promise<Recipe>
}