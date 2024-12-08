import { Recipe } from "../entities/recipe";

export interface UpdateRecipe {
    execute: (id: string, recipe: Recipe) => Promise<Recipe>
}