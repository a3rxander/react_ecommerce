 
import type { User } from '@/types/user.type';
import { loginAction } from '../actions/login.action';
import { checkAuthAction } from '../actions/check-auth.action';
import { create } from 'zustand'

type AuthStore = {
    //properties
    user: User  | null;
    token: string | null;
    isAuthenticated: boolean;
    isSeller: boolean;
    isAdmin: boolean;

    //actions
    handleLogin: (username : string, password: string) => Promise<Boolean>;
    handleCheckAuth: () => Promise<Boolean>;
    handleLogout: () => void; 
}

export const useAuthStore = create<AuthStore>()((set) => ({
  
        user: null,
        token: null,
        isAuthenticated: false,
        isSeller: false,
        isAdmin: false,
        handleLogin: async (username: string, password: string) => 
        {
            try {
                const response = await loginAction(username, password); 
                localStorage.setItem('token', response.token);
                set({ user: response.user, token: response.token, isAuthenticated: true });
                return true;
            } catch (error) {
                console.error('Login failed:', error);
                return false;
            }
        },
        handleCheckAuth: async () => {
          
            try {
                const data = await checkAuthAction(); 
                set({  isAuthenticated: true, user: data, isSeller: data.role === 'Seller', isAdmin: data.role === 'Admin' });
                return true;
            } catch (error) {
                console.error('Check auth failed:', error);
                return false;
            }

        },
        handleLogout: () => {
            localStorage.removeItem('token');
            set({ user: null, token: null, isAuthenticated: false });
        }
}));