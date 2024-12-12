import { Recipe } from "../../../../../../src/core/recipe/v1/domain/entities/recipe";
import { RecipeRepositoryInterface } from "../../../../../../src/core/recipe/v1/domain/interfaces/repositories/recipe-repository-interface";
import { GetAllRecipes } from "../../../../../../src/core/recipe/v1/domain/use-cases/get-all-recipes";

describe("GetAllRecipes", () => {
    class MockRecipeRepository implements RecipeRepositoryInterface {
        async createRecipe(recipe: Recipe): Promise<Recipe> {
            throw new Error("Method not implemented.");
        }
        async getAllRecipes(): Promise<Recipe[]> {
            throw new Error("Method not implemented."); 
        }
        async getOneRecipe(id: string): Promise<Recipe> {
            throw new Error("Method not implemented."); 
        }
        async updateRecipe(id: string, recipe: Recipe): Promise<Recipe> {
            throw new Error("Method not implemented."); 
        }
        async deleteRecipe(id: string): Promise<void> {
            throw new Error("Method not implemented."); 
        }
    }

    let mockRecipeRepository: RecipeRepositoryInterface;

    beforeAll(() => {
        jest.clearAllMocks();
        mockRecipeRepository = new MockRecipeRepository();
    });

    it("should get all recipes", async () => {
        const getAllRecipes = new GetAllRecipes(mockRecipeRepository);
        const recipes = await getAllRecipes.execute();
        expect(recipes).toEqual([]);
    });
});
