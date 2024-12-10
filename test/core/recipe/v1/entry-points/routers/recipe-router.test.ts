import request from "supertest";
import server from "../../../../../src/server";
import recipeRouter from "../../../../../src/core/recipe/v1/entry-points/routers/recipe-router";
import { Recipe } from "../../../../../src/core/recipe/v1/domain/entities/recipe";
import { CreateRecipeInterface } from "../../../../../src/core/recipe/v1/domain/interfaces/use-cases/create-recipe-interface";
import { GetAllRecipesInterface } from "../../../../../src/core/recipe/v1/domain/interfaces/use-cases/get-all-recipes-interface";
import { GetOneRecipeInterface } from "../../../../../src/core/recipe/v1/domain/interfaces/use-cases/get-one-recipe-interface";
import { UpdateRecipeInterface } from "../../../../../src/core/recipe/v1/domain/interfaces/use-cases/update-recipe-interface";
import { DeleteRecipeInterface } from "../../../../../src/core/recipe/v1/domain/interfaces/use-cases/delete-recipe-interface";

class MockCreateRecipe implements CreateRecipeInterface {
    execute(recipe: Recipe): Promise<Recipe> {
        throw new Error("Method not implemented.");
    };
}

class MockGetAllRecipes implements GetAllRecipesInterface {
    execute() : Promise<Recipe[]> {
        throw new Error("Method not implemented.");
    }    
}

class MockGetOneRecipe implements GetOneRecipeInterface {
    execute(id: string): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
}

class MockUpdateRecipe implements UpdateRecipeInterface {
    execute(id: string, recipe: Recipe): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
}

class MockDeleteRecipe implements DeleteRecipeInterface {
    execute(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

describe("recipeRouter", () => {
    const createRecipe = new MockCreateRecipe();
    const getAllRecipes = new MockGetAllRecipes();
    const getOneRecipe = new MockGetOneRecipe();
    const updateRecipe = new MockUpdateRecipe();
    const deleteRecipe = new MockDeleteRecipe();

    beforeAll(() => {
        server.use(recipeRouter(createRecipe, getAllRecipes, getOneRecipe, updateRecipe, deleteRecipe));
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create a recipe", async () => {
        const recipe = {
            name: "test",
            description: "test",
            ingredients: [],
            quantity: 1,
            unit: "g",
            category: "entree",
            type: "Primary",
            image: "test",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        const response = await request(server).post("/").send(recipe);
        expect(response.status).toBe(201);
    });
}); 

