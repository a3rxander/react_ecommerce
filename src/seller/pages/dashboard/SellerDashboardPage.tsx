import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Eye
} from "lucide-react";

export const SellerDashboardPage = () => {
  const stats = [
    {
      title: "Ingresos Totales",
      value: "$12,345",
      change: "+12.5%",
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: "Productos",
      value: "48",
      change: "+3",
      isPositive: true,
      icon: Package,
    },
    {
      title: "Pedidos",
      value: "156",
      change: "-5.2%",
      isPositive: false,
      icon: ShoppingCart,
    },
    {
      title: "Conversión",
      value: "3.2%",
      change: "+1.1%",
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  const recentOrders = [
    { id: "#12345", customer: "Juan Pérez", product: "Laptop Dell", amount: "$899", status: "Completado" },
    { id: "#12344", customer: "María García", product: "Mouse Logitech", amount: "$45", status: "Enviado" },
    { id: "#12343", customer: "Carlos López", product: "Teclado Mecánico", amount: "$120", status: "Pendiente" },
    { id: "#12342", customer: "Ana Martínez", product: "Monitor Samsung", amount: "$320", status: "Completado" },
    { id: "#12341", customer: "Luis Rodríguez", product: "Webcam HD", amount: "$65", status: "Enviado" },
  ];

  const topProducts = [
    { name: "Laptop Dell XPS", sales: 45, revenue: "$40,455", trend: "+12%" },
    { name: "Mouse Logitech MX", sales: 89, revenue: "$4,005", trend: "+8%" },
    { name: "Teclado Mecánico RGB", sales: 67, revenue: "$8,040", trend: "+15%" },
    { name: "Monitor Samsung 27\"", sales: 34, revenue: "$10,880", trend: "-3%" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Resumen de tu tienda y rendimiento
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="rounded-lg border border-border bg-card p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      stat.isPositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs mes anterior</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <div className="rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Pedidos Recientes
              </h2>
              <p className="text-sm text-muted-foreground">
                Últimas transacciones de tu tienda
              </p>
            </div>
            <Button variant="ghost" size="icon-sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {order.customer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.id} • {order.product}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">
                        {order.amount}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Completado"
                            ? "bg-green-500/10 text-green-500"
                            : order.status === "Enviado"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <Button variant="ghost" size="icon-sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="rounded-lg border border-border bg-card">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Productos Destacados
              </h2>
              <p className="text-sm text-muted-foreground">
                Tus productos más vendidos
              </p>
            </div>
            <Button variant="ghost" size="icon-sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center gap-4 py-3 border-b border-border last:border-0"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {product.sales} ventas
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {product.revenue}
                    </p>
                    <p
                      className={`text-xs ${
                        product.trend.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Acciones Rápidas
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          <Button className="justify-start h-auto py-4" variant="outline">
            <Package className="w-5 h-5 mr-2" />
            Agregar Producto
          </Button>
          <Button className="justify-start h-auto py-4" variant="outline">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Ver Pedidos
          </Button>
          <Button className="justify-start h-auto py-4" variant="outline">
            <TrendingUp className="w-5 h-5 mr-2" />
            Ver Reportes
          </Button>
        </div>
      </div>
    </div>
  );
}