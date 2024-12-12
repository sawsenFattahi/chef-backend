import { recipeGategory, recipeType, recipeUnit } from "../../../../../utils/types/enum-types";  
export interface Recipe {
    id?: string;
    name: string;
    description: string;
    quantity: number;
    unit: string;
    category: string;
    type: string;
    image: string;
 
}

