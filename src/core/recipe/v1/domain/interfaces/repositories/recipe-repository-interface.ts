import { Recipe } from "../../entities/recipe";
export interface RecipeRepositoryInterface {
    createRecipe: (recipe: Recipe) => Promise<Recipe>
    getAllRecipes: () => Promise<Recipe[]>
    getOneRecipe: (id: string) => Promise<Recipe>
    updateRecipe: (id: string, recipe: Recipe) => Promise<Recipe>
    deleteRecipe: (id: string) => Promise<void>
}