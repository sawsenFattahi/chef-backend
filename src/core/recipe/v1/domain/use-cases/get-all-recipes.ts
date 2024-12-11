import { Recipe } from "../entities/recipe";
import { GetAllRecipesInterface } from "../interfaces/use-cases/get-all-recipes-interface";
import { RecipeRepository } from "../repository/recipe-repository";

export class GetAllRecipes implements GetAllRecipesInterface {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    async execute(): Promise<Recipe[]> {
        return await this.recipeRepository.getAllRecipes();
    }
}
