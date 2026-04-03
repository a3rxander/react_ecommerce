import { useQuery } from "@tanstack/react-query"
import { getMyProductsByIdAction } from "../actions/get-myproducts-by-id.action"



export const useMyProduct = (id: string) => {
 
    const query =  useQuery({
        queryKey: ['myproduct', id],
        queryFn: () =>getMyProductsByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })

    // mutation

    return query;
}