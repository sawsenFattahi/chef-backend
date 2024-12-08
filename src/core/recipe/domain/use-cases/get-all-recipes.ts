import { Recipe } from "../entities/recipe";
import { RecipeRepository } from "../interfaces/repositories/recipe-repository";
import { GetAllRecipesInterface } from "../interfaces/use-cases/get-all-recipes-interface";

export class GetAllRecipes implements GetAllRecipesInterface {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    async execute(): Promise<Recipe[]> {
        return await this.recipeRepository.getAllRecipes();
    }
}
