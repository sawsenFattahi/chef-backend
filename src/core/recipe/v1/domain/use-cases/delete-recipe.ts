import { RecipeRepository } from "../repository/recipe-repository";
import { DeleteRecipeInterface } from "../interfaces/use-cases/delete-recipe-interface";

export class DeleteRecipe implements DeleteRecipeInterface {
    recipeRepository: RecipeRepository;
    constructor(recipeRepository: RecipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    async execute(id: string): Promise<void> {
        await this.recipeRepository.deleteRecipe(id);
    }
}