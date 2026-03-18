import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useParams } from "react-router"

export const Header = () => {

    
  const { categoryId } = useParams();
  
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-xl font-bold text-slate-900">ShopName</span>
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex items-center space-x-4">
                        <Link 
                            to="/"
                            className={cn(`px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors`,
                                !categoryId && "bg-slate-100 text-slate-900"
                            )}
                        >
                            Inicio
                        </Link> 
                        <Link 
                            to="/category/books"
                            className={cn(`px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors`,
                                categoryId === "books" && "bg-slate-100 text-slate-900"
                            )}
                        >
                            Libros
                        </Link>
                        <Link 
                            to="/category/electronics"
                            className={cn(`px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors`,
                                categoryId === "electronics" && "bg-slate-100 text-slate-900"
                            )}       
                    >
                            Electrónica
                        </Link>
                        <Link
                            to="/category/clothing"
                            className={cn(`px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors`,
                                categoryId === "clothing" && "bg-slate-100 text-slate-900"
                            )}

                        >
                            Ropa
                        </Link> 
                    </nav>

                    {/* Right Section - Cart & Logout */}
                    <div className="flex items-center space-x-2">
                        {/* Cart Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="relative"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="ml-2 hidden sm:inline">Carrito</span>
                            {/* Badge */}
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                                3
                            </span>
                        </Button>

                        {/* Logout Button */}
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            <span className="ml-2 hidden sm:inline">Salir</span>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu (Hidden by default) */}
                <div className="md:hidden border-t">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        >
                            Inicio
                        </a>
                        <a
                            href="/category"
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        >
                            Categorías
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}