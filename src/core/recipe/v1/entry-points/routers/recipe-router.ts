import express from "express";
import { CreateRecipeInterface } from "../../domain/interfaces/use-cases/create-recipe-interface";
import { DeleteRecipeInterface } from "../../domain/interfaces/use-cases/delete-recipe-interface";
import { GetAllRecipesInterface } from "../../domain/interfaces/use-cases/get-all-recipes-interface";
import { GetOneRecipeInterface } from "../../domain/interfaces/use-cases/get-one-recipe-interface";
import { UpdateRecipeInterface } from "../../domain/interfaces/use-cases/update-recipe-interface";

export default function recipeRouter(
    createRecipe: CreateRecipeInterface,
    getAllRecipes: GetAllRecipesInterface,
    getOneRecipe: GetOneRecipeInterface,
    updateRecipe: UpdateRecipeInterface,
    deleteRecipe: DeleteRecipeInterface) {
    const router = express.Router();

    router.post("/", async (req, res) => {
        try {
            const recipe = await createRecipe.execute(req.body);
            res.status(201).json(recipe);
        } catch (error) {
            console.log(error);
        }
    });

    router.get("/", async (req, res) => {
        try {
            const recipes = await getAllRecipes.execute();
            res.status(200).json(recipes);
        } catch (error) {
            console.log(error);
        }
        
    });

    router.get("/:id", async (req, res) => {
        const recipe = await getOneRecipe.execute(req.params.id);
        res.status(200).json(recipe);
    });

    router.put("/:id", async (req, res) => {
        try {
            const recipe = await updateRecipe.execute(req.params.id, req.body);
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
        }
    });

    router.patch("/:id", async (req, res) => {
        try {
            const recipe = await updateRecipe.execute(req.params.id, req.body);
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete("/:id", async (req, res) => {
        try {
            await deleteRecipe.execute(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.log(error);
        }    
    });

    return router;
}