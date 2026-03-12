import { lazy } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { ShopLayout } from "./shop/layouts/ShopLayout"  
import { HomePage } from "./shop/pages/home/HomePage"
import { CategoryPage } from "./shop/pages/category/CategoryPage"
import { ProductPage } from "./shop/pages/product/ProductPage"
import { LoginPage } from "./auth/pages/login/LoginPage"
import { RegisterPage } from "./auth/pages/register/RegisterPage"
import { SellerDashboardPage } from "./seller/pages/dashboard/SellerDashboardPage"
import { SellerProductsPage } from "./seller/pages/products/SellerProductsPage"
import { SellerProductPage } from "./seller/pages/product/SellerProductPage"

const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));
const SellerLayout = lazy(() => import("./seller/layouts/SellerLayout"));

export const AppRouter  = createBrowserRouter([
    //public routes
    {
        path: "/",
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "category/:categoryId",
                element: <CategoryPage />
            },
            {
                path: "product/:productId",
                element: <ProductPage />
            }
        ]
    },
    //auth routes
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />  
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            }
        ]
    },
    //seller routes
    {
        path: "/seller",
        element: <SellerLayout />,
        children: [
            {
                index: true,
                element: <SellerDashboardPage />
            },
            {
                path:"products",
                element: <SellerProductsPage />
            },
            {
                path:"products/:productId",
                element: <SellerProductPage />
            }
        ]
    }, 
])
