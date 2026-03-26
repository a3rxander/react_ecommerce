
import { backendApi } from "@/api/backendApi";
import type { User } from "@/types/user.type";


export const checkAuthAction = async (): Promise<User> => {

    try {
        const response = await backendApi.get<User>('/Auth/me');
        return response.data;
    } catch (error) {
        console.error('Check auth failed:', error);
        throw error;
    }   
}