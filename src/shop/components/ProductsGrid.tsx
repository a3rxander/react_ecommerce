
 import type {Product} from '@/mocks/products.mock'

 interface Props {
    products: Product[]
 }

export const ProductsGrid = ({ products }: Props) => { 

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="half-fill">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-fill)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            );
        }

        return stars;
    };

    return (
        <div className="flex-1 p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
                    <p className="text-sm text-gray-600 mt-1">{products.length} products found</p>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                    <option>Newest First</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div 
                        key={product.id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 group"
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden bg-gray-100">
                            <img 
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            {/* Badge */}
                            {product.badge && (
                                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                                    product.badge.includes('OFF') 
                                        ? 'bg-red-500 text-white'
                                        : product.badge === 'Best Seller' || product.badge === 'Top Rated'
                                        ? 'bg-yellow-400 text-gray-900'
                                        : 'bg-blue-500 text-white'
                                }`}>
                                    {product.badge}
                                </span>
                            )}

                            {/* Quick Action Buttons */}
                            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div> 
                        </div>

                        {/* Product Info */}
                        <div className="p-4">
                            <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 h-10">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                <div className="flex">{renderStars(product.rating)}</div>
                                <span className="text-xs text-gray-600">({product.reviews})</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-lg font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-sm text-gray-500 line-through">
                                        ${product.originalPrice}
                                    </span>
                                )}
                            </div>

                            {/* Add to Cart Button */}
                            <button 
                                disabled={!product.stock}
                                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                                    product.stock
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                {product.stock ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Add to Cart
                                    </span>
                                ) : (
                                    'Unavailable'
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
 
        </div>
    );
}