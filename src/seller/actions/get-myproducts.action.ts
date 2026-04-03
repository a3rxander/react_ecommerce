import { backendApi } from "@/api/backendApi";
import type{  Product } from "@/types/product.types";

 

export const getMyProductsAction = async (  ) => 
{
    try {
         const response = await backendApi.get<Product>('/v1/Products/me'); 
        return response.data;

    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}