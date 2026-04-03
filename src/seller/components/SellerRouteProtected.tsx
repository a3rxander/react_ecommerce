import { useAuthStore } from "@/auth/store/auth.store";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";


export const SellerRouteProtected = ( {children}:PropsWithChildren ) => {

    const { isAuthenticated, isSeller } =  useAuthStore()

    if(!isAuthenticated || !isSeller) {
        return  <Navigate to="/auth/login" />;
    }

    return children;
}