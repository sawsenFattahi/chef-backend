import { Recipe } from "../entities/recipe";

export interface DeleteRecipe {
    execute: (id: string) => Promise<void>;
}