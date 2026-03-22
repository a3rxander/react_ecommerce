import { backendApi } from "@/api/backendApi";
import type { ProductResponse } from "@/types/product.types";

interface QueryParams {
    PageNumber?: number | string;
    PageSize?: number | string;
    CategoryNames?: string; /* 'Book, Electronics, Clothing', etc. */
    MinPrice?: number | string;
    MaxPrice?: number | string;
    Search?: string;
}
export const getProductsAction = async( queryParams: QueryParams ) => 
{
    try {
        const response = await backendApi.get<ProductResponse>('/v1/Products', { params: {
                PageNumber: queryParams.PageNumber,
                PageSize: queryParams.PageSize,
                CategoryNames: queryParams.CategoryNames,
                MinPrice: queryParams.MinPrice,
                MaxPrice: queryParams.MaxPrice,
                Search: queryParams.Search
        } }); 
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }   
}