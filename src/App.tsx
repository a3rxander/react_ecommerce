import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppRouter } from "./app.router"; 
import { Toaster} from 'sonner'
import { useAuthStore } from "./auth/store/auth.store";

const queryClient = new QueryClient();  

const CheckAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { handleCheckAuth } = useAuthStore();

    const { isLoading}  = useQuery({
        queryKey: ['checkAuth'],
        queryFn: handleCheckAuth,
        retry: false,
        refetchInterval: 1000 * 60 * 1.5, // Refetch every 1.5 minutes
        refetchOnWindowFocus: true,
    });

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Cargando...</div>;
    }
    return <>{children}</>;
}

export const App = () => {
    return ( 
           <QueryClientProvider client={queryClient}>
            <CheckAuthProvider>
                 <RouterProvider router={AppRouter} />
            </CheckAuthProvider> 
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
            </QueryClientProvider>
    );
}
