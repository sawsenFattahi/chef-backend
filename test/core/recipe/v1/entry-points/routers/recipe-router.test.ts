import request from "supertest";
import server from "../../../../../../src/server";
import recipeRouter from "../../../../../../src/core/recipe/v1/entry-points/routers/recipe-router";
import { Recipe } from "../../../../../../src/core/recipe/v1/domain/entities/recipe";
import { CreateRecipeInterface } from "../../../../../../src/core/recipe/v1/domain/interfaces/use-cases/create-recipe-interface";
import { GetAllRecipesInterface } from "../../../../../../src/core/recipe/v1/domain/interfaces/use-cases/get-all-recipes-interface";
import { GetOneRecipeInterface } from "../../../../../../src/core/recipe/v1/domain/interfaces/use-cases/get-one-recipe-interface";
import { UpdateRecipeInterface } from "../../../../../../src/core/recipe/v1/domain/interfaces/use-cases/update-recipe-interface";
import { DeleteRecipeInterface } from "../../../../../../src/core/recipe/v1/domain/interfaces/use-cases/delete-recipe-interface";


class MockCreatRecipeUseCase implements CreateRecipeInterface {
    execute(recipe: Recipe): Promise<Recipe> {
        throw new Error("Method not implemented."); 
    }       
}
class MockGetAllRecipesUseCase implements GetAllRecipesInterface {
    execute(): Promise<Recipe[]> {
        throw new Error("Method not implemented."); 
    }       
}
class MockGetOneRecipeUseCase implements GetOneRecipeInterface {
    execute(id: string): Promise<Recipe> {
        throw new Error("Method not implemented."); 
    }       
}
class MockUpdateRecipeUseCase implements UpdateRecipeInterface {
    execute(id: string, recipe: Recipe): Promise<Recipe> {
        throw new Error("Method not implemented."); 
    }       
}
class MockDeleteRecipeUseCase implements DeleteRecipeInterface {
    execute(id: string): Promise<void> {
        throw new Error("Method not implemented."); 
    }                               
}

jest.useRealTimers();

describe("recipeRouter", () => {
    let mockCreatRecipeUseCase: CreateRecipeInterface;
    let mockGetAllRecipesUseCase: GetAllRecipesInterface;
    let mockGetOneRecipeUseCase: GetOneRecipeInterface;
    let mockUpdateRecipeUseCase: UpdateRecipeInterface;
    let mockDeleteRecipeUseCase: DeleteRecipeInterface;

    beforeAll(() => {
        mockCreatRecipeUseCase = new MockCreatRecipeUseCase();
        mockGetAllRecipesUseCase = new MockGetAllRecipesUseCase();
        mockGetOneRecipeUseCase = new MockGetOneRecipeUseCase();
        mockUpdateRecipeUseCase = new MockUpdateRecipeUseCase();
        mockDeleteRecipeUseCase = new MockDeleteRecipeUseCase();
        const routes = recipeRouter(
            mockCreatRecipeUseCase,
            mockGetAllRecipesUseCase,
            mockGetOneRecipeUseCase,
            mockUpdateRecipeUseCase,
            mockDeleteRecipeUseCase,    
        );
        server.use('/recipe', routes);
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useRealTimers();
    });

    describe("GET /recipe", () => {

        test("should return 200 with data", async () => {
            const ExpectedData = [
                {
                    id: "1",
                    name: "cookies",
                    description: "string",
                    quantity: 4,
                    unit: "g",
                    category: "entree",
                    type: "Primary",
                    image: "string",
                    createdAt: "string",
                    updatedAt: "string"
                }
            ];
            const rec : Recipe [] = ExpectedData;
            jest.spyOn(mockGetAllRecipesUseCase, "execute").mockImplementation(() => Promise.resolve(rec));
            const response = await request(server).get("/recipe/v1/");
            expect(response.status).toBe(200);
            expect(mockGetAllRecipesUseCase.execute).toBeCalledTimes(1);
            expect(response.body).toStrictEqual(ExpectedData);

        });

        test("GET /contact returns 500 on use case error", async () => {
            jest.spyOn(mockGetAllRecipesUseCase, "execute").mockImplementation(() => Promise.reject(Error()));
            const response = await request(server).get("/recipe/v1/");
            expect(response.status).toBe(500);
            expect(response.body).toStrictEqual({ message: "Error fetching data" });
        });
    })
}); 

