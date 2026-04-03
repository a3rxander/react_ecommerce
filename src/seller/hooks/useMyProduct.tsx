import { useQuery, useMutation, useQueryClient   } from "@tanstack/react-query"
import { getMyProductsByIdAction } from "../actions/get-myproducts-by-id.action" 
import { createOrUpdateProductAction } from "../actions/create-update-product.action"
import type { Product } from "@/types/product.types"



export const useMyProduct = (id: string) => {
 
    const QueryClient = useQueryClient();

    const query =  useQuery({
        queryKey: ['myproduct', id],
        queryFn: () =>getMyProductsByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })

    // mutation

    const mutation= useMutation({ 
        mutationFn: createOrUpdateProductAction,
        onSuccess: (product: Product) => {
            QueryClient.invalidateQueries({ queryKey: ['myproducts'] });
            QueryClient.invalidateQueries({ queryKey: ['myproduct', product.id] }); 
        
            QueryClient.setQueryData(['myproduct', product.id], product);
        }
    });



    return { ...query, mutation };
}