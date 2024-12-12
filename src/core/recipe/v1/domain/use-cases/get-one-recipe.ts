import { Recipe } from "../entities/recipe";
import { RecipeRepository } from "../repository/recipe-repository";
import { GetOneRecipeInterface } from "../interfaces/use-cases/get-one-recipe-interface";
import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";

export class GetOneRecipe implements GetOneRecipeInterface {
    recipeRepository: RecipeRepositoryInterface;
    constructor(recipeRepository: RecipeRepositoryInterface) {
        this.recipeRepository = recipeRepository;
    }
    async execute(id: string): Promise<Recipe> {
        return await this.recipeRepository.getOneRecipe(id);
    }
}