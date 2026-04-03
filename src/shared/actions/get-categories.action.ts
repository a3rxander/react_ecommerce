import { backendApi } from "@/api/backendApi"
import type { Category } from "@/types/category.type"

export const getCategoriesAction = async (): Promise<Category[]> => {
    try {
        const response = await backendApi.get<Category[]>("/v1/Categories");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
