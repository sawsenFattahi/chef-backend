import { Recipe } from "../../entities/recipe";
export interface RecipeRepository {
    createRecipe: (recipe: Recipe) => Promise<Recipe>
    getAllRecipes: () => Promise<Recipe[]>
    getOneRecipe: (id: string) => Promise<Recipe>
    updateRecipe: (id: string, recipe: Recipe) => Promise<Recipe>
    deleteRecipe: (id: string) => Promise<void>
}