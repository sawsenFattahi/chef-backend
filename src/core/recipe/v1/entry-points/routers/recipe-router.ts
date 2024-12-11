import express from "express";
import { CreateRecipe } from "../../domain/use-cases/create-recipe";
import { GetAllRecipes } from "../../domain/use-cases/get-all-recipes";
import { GetOneRecipe } from "../../domain/use-cases/get-one-recipe";
import { UpdateRecipe } from "../../domain/use-cases/update-recipe";
import { DeleteRecipe } from "../../domain/use-cases/delete-recipe";

export default function recipeRouter(
    createRecipe: CreateRecipe,
    getAllRecipes: GetAllRecipes,
    getOneRecipe: GetOneRecipe,
    updateRecipe: UpdateRecipe,
    deleteRecipe: DeleteRecipe) {
    const router = express.Router();

    router.post("/v1/", async (req, res) => {
        try {
            const recipe = await createRecipe.execute(req.body);
            res.status(201).json(recipe);
        } catch (error) {
            console.log(error);
        }
    });

    router.get("/v1/", async (req, res) => {
        try {
            const recipes = await getAllRecipes.execute();
            res.status(200).json(recipes);
        } catch (error) {
            console.log(error);
        }
        
    });

    router.get("/v1/:id", async (req, res) => {
        const recipe = await getOneRecipe.execute(req.params.id);
        res.status(200).json(recipe);
    });

    router.put("/v1/:id", async (req, res) => {
        try {
            const recipe = await updateRecipe.execute(req.params.id, req.body);
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
        }
    });

    router.patch("/v1/:id", async (req, res) => {
        try {
            const recipe = await updateRecipe.execute(req.params.id, req.body);
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete("/v1/:id", async (req, res) => {
        try {
            await deleteRecipe.execute(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.log(error);
        }    
    });

    return router;
}