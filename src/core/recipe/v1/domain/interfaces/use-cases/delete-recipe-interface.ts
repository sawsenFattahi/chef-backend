import { Recipe } from "../../entities/recipe";

export interface DeleteRecipeInterface {
    execute: (id: string) => Promise<void>;
}