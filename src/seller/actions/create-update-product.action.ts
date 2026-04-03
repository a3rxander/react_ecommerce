
import { backendApi } from "@/api/backendApi"
import type { CreateProduct, Product } from "@/types/product.types"

export const createOrUpdateProductAction = async (payload: CreateProduct): Promise<Product> => {
    try {
         
        const response = await backendApi<Product>({
            method: payload.id === 'new' ? 'POST' : 'PUT',
            url: payload.id === 'new' ? "/v1/Products" : `/v1/Products/${payload.id}`,
            data: payload,
        });

        return response.data;
    } catch (error) {
        console.error("Error creating/updating product:", error);
        throw new Error("Failed to create/update product");
    }
}