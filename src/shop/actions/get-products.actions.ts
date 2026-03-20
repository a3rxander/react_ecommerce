import { backendApi } from "@/api/backendApi";
import type { Product } from "@/types/product.types";

export const getProductsAction = async() => {
    try {
        const response = await backendApi.get<Product>('/v1/Product');
        console.log('Products fetched successfully:', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }   
}