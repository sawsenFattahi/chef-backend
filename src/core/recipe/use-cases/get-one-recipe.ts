import { Recipe } from "../entities/recipe";

export interface GetOneRecipe {
    execute: (id: string) => Promise<Recipe>
}