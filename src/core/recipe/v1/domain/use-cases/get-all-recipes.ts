import { Recipe } from "../entities/recipe";
import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";
import { GetAllRecipesInterface } from "../interfaces/use-cases/get-all-recipes-interface";

export class GetAllRecipes implements GetAllRecipesInterface {
    recipeRepository: RecipeRepositoryInterface;
    constructor(recipeRepository: RecipeRepositoryInterface) {
        this.recipeRepository = recipeRepository;
    }

    async execute(): Promise<Recipe[]> {
        return await this.recipeRepository.getAllRecipes();
    }
}
