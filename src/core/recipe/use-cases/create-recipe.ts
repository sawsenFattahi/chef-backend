import { Recipe } from "../entities/recipe";

export interface CreateRecipe {
    execute: (recipe: Recipe) => Promise<Recipe>
}