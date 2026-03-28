"use client"
import type { Product } from "@/types/product.types"
import { Button } from "@/components/ui/button"
import type { ColumnDef } from "@tanstack/react-table" 
import { Link } from "react-router-dom"
 
 

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
 
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "category.name",
    header: "Category",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ getValue }) => {
      const date = new Date(getValue() as string);
      return date.toLocaleDateString();
    },
  },
  {
    id: "edit",
    cell: ({ row }) => {
      const product = row.original
      return (
        <Link to={`/seller/products/${product.id}`}>
          <Button variant="outline">Editar</Button>
        </Link>
      )
    }
  },
]