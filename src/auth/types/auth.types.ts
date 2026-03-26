import type { User } from "@/types/user.type";

export interface AuthResponse {
    token: string;
    user : User;
}