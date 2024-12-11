import { RecipeDataSourceInterface } from "../interfaces/data-sources/recipe-data-source-interface";
import { DatabaseWrapper } from "../../../../../utils/interfaces/database-wrapper";
import { Recipe } from "../../domain/entities/recipe";

export class MongodbRecipeDataSource implements RecipeDataSourceInterface {
    constructor(private database: DatabaseWrapper) {}

    async createRecipe(recipe: Recipe): Promise<Recipe> { console.log('from repodatasource');
        return this.database.insertOne(recipe);     
    }

    async getAllRecipes(): Promise<Recipe[]> {
        return this.database.find();
    }

    async getOneRecipe(id: string): Promise<Recipe> {
        return this.database.findOne(id);     
    }

    async updateRecipe(id: string, recipe: Recipe): Promise<Recipe> {
        return this.database.update(id, recipe);     
    }

    async deleteRecipe(id: string): Promise<void> {
        return this.database.delete(id);     
    }
}