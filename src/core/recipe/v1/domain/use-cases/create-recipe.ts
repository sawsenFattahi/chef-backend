import { Recipe } from "../entities/recipe";
import { CreateRecipeInterface } from "../interfaces/use-cases/create-recipe-interface";
import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";

export class CreateRecipe implements CreateRecipeInterface {
    recipeRepository: RecipeRepositoryInterface;
    constructor(recipeRepository: RecipeRepositoryInterface) {
        this.recipeRepository = recipeRepository;
    }
    async execute(recipe: Recipe): Promise<Recipe> {
        return await this.recipeRepository.createRecipe(recipe);
    }
}