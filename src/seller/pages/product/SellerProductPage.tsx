import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const SellerProductPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/seller/products">
          <Button variant="ghost" size="icon-sm">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground">Agregar Producto</h1>
          <p className="text-muted-foreground mt-1">
            Completa la información del producto
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Guardar como Borrador</Button>
          <Button>Publicar Producto</Button>
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
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-foreground">
                Descripción *
              </label>
              <textarea
                id="description"
                rows={6}
                placeholder="Describe tu producto en detalle..."
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Mínimo 100 caracteres. Sea detallado y específico.
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
                    id="price"
                    type="number"
                    placeholder="0.00"
                    className="w-full h-10 pl-7 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="comparePrice" className="text-sm font-medium text-foreground">
                  Precio de Comparación
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <input
                    id="comparePrice"
                    type="number"
                    placeholder="0.00"
                    className="w-full h-10 pl-7 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="sku" className="text-sm font-medium text-foreground">
                  SKU
                </label>
                <input
                  id="sku"
                  type="text"
                  placeholder="PROD-001"
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="stock" className="text-sm font-medium text-foreground">
                  Stock Disponible *
                </label>
                <input
                  id="stock"
                  type="number"
                  placeholder="0"
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
            </div>
          </div>

          {/* Images */}
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
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg border border-border overflow-hidden group"
                  >
                    <img
                      src={`https://via.placeholder.com/200`}
                      alt={`Product ${i}`}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-1 right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-4 h-4" />
                    </button>
                    {i === 1 && (
                      <span className="absolute bottom-1 left-1 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                        Principal
                      </span>
                    )}
                  </div>
                ))}
                <button className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary/50 transition-colors flex items-center justify-center">
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Variants */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Variantes
            </h2>
            <p className="text-sm text-muted-foreground">
              Agrega variantes como color, tamaño, etc.
            </p>
            <Button variant="outline" className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Variante
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Estado
            </h2>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium text-foreground">
                Estado de Publicación
              </label>
              <select
                id="status"
                className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option>Publicado</option>
                <option>Borrador</option>
                <option>Archivado</option>
              </select>
            </div>
          </div>

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
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option>Seleccionar categoría</option>
                  <option>Electrónica</option>
                  <option>Ropa</option>
                  <option>Hogar</option>
                  <option>Deportes</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium text-foreground">
                  Etiquetas
                </label>
                <input
                  id="tags"
                  type="text"
                  placeholder="laptop, computadora, dell"
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                <p className="text-xs text-muted-foreground">
                  Separa las etiquetas con comas
                </p>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Envío
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="weight" className="text-sm font-medium text-foreground">
                  Peso (kg)
                </label>
                <input
                  id="weight"
                  type="number"
                  placeholder="0.0"
                  className="w-full h-10 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="freeShipping"
                  type="checkbox"
                  className="w-4 h-4 rounded border-input"
                />
                <label htmlFor="freeShipping" className="text-sm text-foreground cursor-pointer">
                  Envío gratis
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}