import { Recipe } from "../../../domain/entities/recipe";

export interface RecipeDataSource {
    createRecipe(recipe: Recipe): Promise<Recipe>;
    getAllRecipes(): Promise<Recipe[]>;
    getOneRecipe(id: string): Promise<Recipe>;
    updateRecipe(id: string, recipe: Recipe): Promise<Recipe>;
    deleteRecipe(id: string): Promise<void>;
}