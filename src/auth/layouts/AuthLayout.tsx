import { Outlet } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-primary via-primary/90 to-primary/80 p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-primary-foreground">
            <ShoppingBag className="w-8 h-8" />
            <span className="text-2xl font-bold">E-Commerce</span>
          </div>
        </div>
        
        {/* Center content */}
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Tu tienda online favorita
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-md">
            Descubre miles de productos, ofertas exclusivas y la mejor experiencia de compra.
          </p>
          
          {/* Features */}
          <div className="space-y-4 pt-8">
            {[
              "Envío gratis en compras superiores a $50",
              "Devoluciones sin complicaciones",
              "Más de 10,000 productos disponibles",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-primary-foreground/90">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Star className="w-4 h-4" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="relative z-10 text-sm text-primary-foreground/70">
          © 2026 E-Commerce. Todos los derechos reservados.
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex items-center gap-2 text-foreground">
            <ShoppingBag className="w-7 h-7" />
            <span className="text-xl font-bold">E-Commerce</span>
          </div>
          
          {/* Form content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout
