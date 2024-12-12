import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";
import { Recipe } from "../entities/recipe";
import { RecipeDataSourceInterface } from "../../data-access/interfaces/data-sources/recipe-data-source-interface";

export class RecipeRepository implements RecipeRepositoryInterface {
    dataSource: RecipeDataSourceInterface;
    constructor(dataSource: RecipeDataSourceInterface) {
        this.dataSource = dataSource;
    }
    async createRecipe(recipe: Recipe): Promise<Recipe> { 
        console.log('from repository');
        const recipeCreated = await this.dataSource.createRecipe(recipe);
        return recipeCreated;
    }

    async getAllRecipes(): Promise<Recipe[]> {
        const recipes = await this.dataSource.getAllRecipes();
        return recipes;
    }
    async getOneRecipe(id: string): Promise<Recipe> {
        const recipe = await this.dataSource.getOneRecipe(id);
        return recipe;
    }
    async updateRecipe(id: string, recipe: Recipe): Promise<Recipe> {
        const recipeUpdated = await this.dataSource.updateRecipe(id, recipe);
        return recipeUpdated;
    }
    async deleteRecipe(id: string): Promise<void> {
        await this.dataSource.deleteRecipe(id);}
}