import { Button } from "@/components/ui/button"; 
import { Spinner } from "@/components/ui/spinner"
import { ArrowLeft, Upload, X, Plus } from "lucide-react";
import { Link } from "react-router-dom"; 
import type { CreateProduct } from "@/types/product.types";
import { useForm } from "react-hook-form"
import {useCategories} from "@/shared/hooks/useCategories"


interface Props {
    product: CreateProduct;
    isCreating: boolean;
    onSubmit: (payload: CreateProduct) =>  Promise<void>;
}

export const FormProductPage = ({ product, isCreating, onSubmit, isPending }: Props) => { 

  const { data: categories } = useCategories();
const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm({
    defaultValues: product})  

  return (
    <div className="space-y-6">
     <form onSubmit={handleSubmit(onSubmit)}>
 
      {/* Header */} 
      <div className="flex items-center gap-4">
        <Link to="/seller/products">
          <Button variant="ghost" size="icon-sm">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground">
            {isCreating ? "Agregar Producto" : "Editar Producto"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isCreating ? "Completa la información del producto" : "Actualiza la información del producto"}
          </p>
        </div>
        <div className="flex gap-2"> 
          <Button type="submit" disabled={isPending}
          >Publicar Producto
            {isPending && <Spinner className="ml-2" />}
          </Button>
        </div>
      </div> 
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Información Básica
            </h2> 

            <div className="space-y-2">
              <label htmlFor="productName" className="text-sm font-medium text-foreground">
                Nombre del Producto *
              </label>
              <input
                id="productName"
                type="text"
                placeholder="Laptop Dell XPS 13"
                className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
 
                { ...register("name", { required: "El nombre del producto es obligatorio" }) }
              />
               <p className="text-xs  text-muted-foreground">
                {errors.name?.message}
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-foreground">
                Descripción *
              </label>
              <textarea
                id="description"
                rows={6}
                { ...register("description", { required: "La descripción del producto es obligatoria", minLength: { value: 10, message: "La descripción debe tener al menos 10 caracteres" } }) }
                placeholder="Describe tu producto en detalle..."
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                
              />
              <p className="text-xs text-muted-foreground">
                Mínimo 10 caracteres. Sea detallado y específico.
              </p>
            </div>
          </div>

          {/* Pricing */} 
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Precio e Inventario
            </h2>
 
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium text-foreground">
                  Precio *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input 
                  {...register("price", { required: "El precio es obligatorio", min: { value: 0.01, message: "El precio debe ser mayor a 0" } }) }
                    placeholder="0.00"
                    className="w-full h-10 pl-7 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    
                  />
                </div>
                {errors.price && (
                  <p className="text-xs text-destructive">
                    {errors.price.message}
                  </p>
                )}
              </div>
 
            </div> 

          { !isCreating && (
            <div className="grid gap-4 sm:grid-cols-2">
  
              <div className="space-y-2">
                <label htmlFor="stock" className="text-sm font-medium text-foreground">
                  Stock Disponible *
                </label>
                <input
                  id="stock"
                  type="number"
                  {...register("stock", { required: "El stock disponible es obligatorio", min: { value: 0, message: "El stock no puede ser negativo" } }) }
                   
                  placeholder="0"
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
            </div> )}
          </div>

          {/* Images */}
          { !isCreating && (
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Imágenes del Producto
            </h2>

            <div className="space-y-4">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">
                  Haz clic para subir o arrastra y suelta
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF hasta 10MB
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-4 gap-4">
                {product?.images?.map((image) => (
                  <div key={image.id} className="relative">
                    <img  src={image.imageUrl} alt={`Product Image ${image.id}`} className="w-full h-24 object-cover rounded-lg" />
                    <button className="absolute top-1 right-1 w-6 h-6 rounded-full bg-background flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </button>
                  </div>
                ))}
                <button className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors flex items-center justify-center">
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6"> 

          {/* Category */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Organización
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-foreground">
                  Categoría *
                </label>
                <select
                  id="category"
                  { ...register("categoryId", { required: "La categoría es obligatoria" }) }
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Selecciona una categoría</option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
 
            </div>
          </div>

          
        </div>
      </div>
    </form>
    </div>
  );
}