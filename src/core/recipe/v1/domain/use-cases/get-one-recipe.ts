import { Recipe } from "../entities/recipe";
import { RecipeRepository } from "../interfaces/repositories/recipe-repository";
import { GetOneRecipeInterface } from "../interfaces/use-cases/get-one-recipe-interface";

export class GetOneRecipe implements GetOneRecipeInterface {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async execute(id: string): Promise<Recipe> {
        return await this.recipeRepository.getOneRecipe(id);
    }
}