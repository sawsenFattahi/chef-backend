import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";
import { Recipe } from "../entities/recipe";
import { RecipeDataSourceInterface } from "../../data-access/interfaces/data-sources/recipe-data-source-interface";

export class RecipeRepository implements RecipeRepositoryInterface {
    dataSource: RecipeDataSourceInterface;
    constructor(dataSource: RecipeDataSourceInterface) {
        this.dataSource = dataSource;
    }
    async createRecipe(recipe: Recipe): Promise<Recipe> { 
        const recipeCreated = await this.dataSource.createRecipe(recipe);
        return recipeCreated;
    }

    async getAllRecipes(): Promise<Recipe[]> {
        throw new Error("Method not implemented.");
    }
    async getOneRecipe(id: string): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
    async updateRecipe(id: string, recipe: Recipe): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
    async deleteRecipe(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}