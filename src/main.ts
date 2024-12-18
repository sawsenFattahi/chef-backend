import * as dotenv from "dotenv";
import server from "./server";
import { MongodbRecipeDataSource } from "./core/recipe/v1/data-access/data-sources/mongodb-recipe-datasource";
import { getMongoDataService } from "./utils/interfaces/mongdb-service";
import recipeRouter from "./core/recipe/v1/entry-points/routers/recipe-router";
import { GetAllRecipes } from "./core/recipe/v1/domain/use-cases/get-all-recipes";
import { CreateRecipe } from "./core/recipe/v1/domain/use-cases/create-recipe";
import { GetOneRecipe } from "./core/recipe/v1/domain/use-cases/get-one-recipe";
import { DeleteRecipe } from "./core/recipe/v1/domain/use-cases/delete-recipe";
import { UpdateRecipe } from "./core/recipe/v1/domain/use-cases/update-recipe";
import { RecipeRepository } from "./core/recipe/v1/domain/repository/recipe-repository";

dotenv.config();

if(!process.env.PORT) {
    throw new Error("PORT is not defined");
    process.exit(1);
}

if(!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
    process.exit(1);
}

const PORT = parseInt(process.env.PORT) || 3000;


(async () => {
    const dataSource = await getMongoDataService(MongodbRecipeDataSource);
    const routes = await recipeRouter(
        new CreateRecipe(new RecipeRepository(dataSource)),
        new GetAllRecipes(new RecipeRepository(dataSource)),
        new GetOneRecipe(new RecipeRepository(dataSource)),
        new UpdateRecipe(new RecipeRepository(dataSource)),
        new DeleteRecipe(new RecipeRepository(dataSource)),
    );
    server.use('/recipe', routes);
    server.listen(PORT, () => {
        console.log(`server is listening on port: ${PORT}`);
    });
})();
