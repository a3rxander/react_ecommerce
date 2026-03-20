import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppRouter } from "./app.router"; 

const queryClient = new QueryClient();

export const App = () => {
    return ( 
           <QueryClientProvider client={queryClient}>
      
                <RouterProvider router={AppRouter} />
            <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
    );
}
