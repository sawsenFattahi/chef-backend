import { Recipe } from "../../entities/recipe";

export interface GetOneRecipeInterface {
    execute: (id: string) => Promise<Recipe>
}