import { recipeGategory, recipeType, recipeUnit } from "../../../../../utils/types/enum-types";  
export interface Recipe {
    id?: string;
    name: string;
    description: string;
    ingredients: Recipe[];
    quantity: number;
    unit: recipeUnit;
    category: recipeGategory;
    type: recipeType;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

