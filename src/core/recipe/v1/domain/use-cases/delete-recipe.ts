import { DeleteRecipeInterface } from "../interfaces/use-cases/delete-recipe-interface";
import { RecipeRepositoryInterface } from "../interfaces/repositories/recipe-repository-interface";

export class DeleteRecipe implements DeleteRecipeInterface {
    recipeRepository: RecipeRepositoryInterface;
    constructor(recipeRepository: RecipeRepositoryInterface) {
        this.recipeRepository = recipeRepository;
    }

    async execute(id: string): Promise<void> {
        await this.recipeRepository.deleteRecipe(id);
    }
}