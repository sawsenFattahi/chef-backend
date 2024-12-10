import { MongodbRecipeDataSource } from "../../../../../../src/core/recipe/data-access/data-sources/mongodb-recipe-datasource";
import { DatabaseWrapper } from "../../../../../../src/core/recipe/data-access/interfaces/data-sources/database-wrapper";

describe("MongodbRecipeDataSource", () => {
    let dataSource: MongodbRecipeDataSource;
    let mockDatabase: DatabaseWrapper;   

    beforeAll(() => {
        mockDatabase = {
            findOne: jest.fn(),
            find: jest.fn(),
            insertOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        }
        dataSource = new MongodbRecipeDataSource(mockDatabase); 
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

 it("should get all recipes", async () => { 
    const recipes = await dataSource.getAllRecipes();
    expect(recipes).toEqual([]);
 });
    
}); 