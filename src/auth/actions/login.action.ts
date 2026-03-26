import { backendApi } from "@/api/backendApi";
import type { AuthResponse } from "../types/auth.types";

export const loginAction = async ( username: string, password: string ): Promise<AuthResponse> =>
{
    try {
        const {data} = await backendApi.post<AuthResponse>('/Auth/login', { username, password });

        return data;
    }
    catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}