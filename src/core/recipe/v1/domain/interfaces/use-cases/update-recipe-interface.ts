import { Recipe } from "../../entities/recipe";

export interface UpdateRecipeInterface {
    execute: (id: string, recipe: Recipe) => Promise<Recipe>
}