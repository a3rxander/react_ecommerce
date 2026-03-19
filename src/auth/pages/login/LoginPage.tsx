import { Button } from "@/components/ui/button";
import { Mail, Lock, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Iniciar Sesión
                </h1>
                <p className="text-muted-foreground">
                    Ingresa tus credenciales para acceder a tu cuenta
                </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                    <label 
                        htmlFor="email" 
                        className="text-sm font-medium text-foreground"
                    >
                        Correo Electrónico
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@correo.com"
                            className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <label 
                        htmlFor="password" 
                        className="text-sm font-medium text-foreground"
                    >
                        Contraseña
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full h-10 pl-10 pr-12 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <EyeOff className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        />
                        <span className="text-sm text-foreground">
                            Recordarme
                        </span>
                    </label>
                    <Link 
                        to="/auth/forgot-password" 
                        className="text-sm text-primary hover:underline"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>

                {/* Submit Button */}
                <Button 
                    type="submit" 
                    className="w-full h-10"
                    size="lg"
                >
                    Iniciar Sesión
                </Button>
            </form>

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        O continúa con
                    </span>
                </div>
            </div>

          
            {/* Sign up link */}
            <div className="text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <Link 
                    to="/auth/register" 
                    className="text-primary font-medium hover:underline"
                >
                    Regístrate aquí
                </Link>
            </div>
        </div>
    );
}