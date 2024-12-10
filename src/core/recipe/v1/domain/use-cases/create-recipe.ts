import { Recipe } from "../entities/recipe";
import { RecipeRepository } from "../interfaces/repositories/recipe-repository";
import { CreateRecipeInterface } from "../interfaces/use-cases/create-recipe-interface";

export class CreateRecipe implements CreateRecipeInterface {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async execute(recipe: Recipe): Promise<Recipe> {
        return await this.recipeRepository.createRecipe(recipe);
    }
}