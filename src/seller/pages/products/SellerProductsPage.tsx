import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

export const SellerProductsPage = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      name: "Laptop Dell XPS 13",
      category: "Electrónica",
      price: "$899.00",
      stock: 25,
      status: "Activo",
      sales: 45,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      name: "Mouse Logitech MX Master",
      category: "Accesorios",
      price: "$45.00",
      stock: 120,
      status: "Activo",
      sales: 89,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      name: "Teclado Mecánico RGB",
      category: "Accesorios",
      price: "$120.00",
      stock: 0,
      status: "Agotado",
      sales: 67,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/100",
      name: "Monitor Samsung 27\"",
      category: "Electrónica",
      price: "$320.00",
      stock: 15,
      status: "Activo",
      sales: 34,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/100",
      name: "Webcam HD Logitech",
      category: "Accesorios",
      price: "$65.00",
      stock: 8,
      status: "Bajo Stock",
      sales: 56,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/100",
      name: "Auriculares Sony WH-1000XM4",
      category: "Audio",
      price: "$280.00",
      stock: 30,
      status: "Activo",
      sales: 78,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Productos</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona tu catálogo de productos
          </p>
        </div>
        <Link to="/seller/product/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Agregar Producto
          </Button>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Exportar
        </Button>
      </div>

      {/* Products Table */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input type="checkbox" className="w-4 h-4 rounded border-input" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Ventas
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-input" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ID: #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-foreground">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-foreground">
                      {product.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-foreground">
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === "Activo"
                          ? "bg-green-500/10 text-green-500"
                          : product.status === "Agotado"
                          ? "bg-red-500/10 text-red-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-foreground">
                      {product.sales}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon-sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Link to={`/seller/product/${product.id}`}>
                        <Button variant="ghost" size="icon-sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon-sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Mostrando <span className="font-medium">1</span> a{" "}
            <span className="font-medium">6</span> de{" "}
            <span className="font-medium">48</span> productos
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}