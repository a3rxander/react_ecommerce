import { backendApi } from "@/api/backendApi";
import type{ CreateProduct } from "@/types/product.types";



export const getMyProductsByIdAction = async (productId: string):Promise<CreateProduct> =>
{  
    if(productId === undefined || productId === null || productId.trim() === "")
    {
        throw new Error("Product ID is required");
    }
    if (productId == 'new')
    {
        return {
            id: 'new',
            name: '',
            description: '',
            price: 0,
            stock: 0,
            categoryId: '',  
        } as CreateProduct;

    }

    try {
        const response = await backendApi.get(`/v1/Products/${productId}`);

        return response.data as CreateProduct;
    
    }
        catch (error) {
            console.error("Error fetching product by ID:", error);
            throw new Error("Failed to fetch product by ID");
        }
} 