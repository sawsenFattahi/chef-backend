import { Recipe } from "../entities/recipe";
import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";
import { UpdateRecipeInterface } from "../interfaces/use-cases/update-recipe-interface";

export class UpdateRecipe implements UpdateRecipeInterface {
    recipeRepository: RecipeRepositoryInterface;
    constructor(recipeRepository: RecipeRepositoryInterface) {
        this.recipeRepository = recipeRepository;
    }
    async execute(id: string, recipe: Recipe): Promise<Recipe> {
        return await this.recipeRepository.updateRecipe(id, recipe);
    }
}