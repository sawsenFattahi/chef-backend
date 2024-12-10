import { Recipe } from "../entities/recipe";
import { RecipeRepository } from "../interfaces/repositories/recipe-repository";
import { UpdateRecipeInterface } from "../interfaces/use-cases/update-recipe-interface";

export class UpdateRecipe implements UpdateRecipeInterface {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async execute(id: string, recipe: Recipe): Promise<Recipe> {
        return await this.recipeRepository.updateRecipe(id, recipe);
    }
}