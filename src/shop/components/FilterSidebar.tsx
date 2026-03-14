import { useState } from 'react';

export const FilterSidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const categories = [
        'Electronics',
        'Clothing',
        'Home & Garden',
        'Sports & Outdoors',
        'Books',
        'Toys & Games',
        'Beauty & Health',
        'Automotive'
    ];

    const brands = [
        'Apple',
        'Samsung',
        'Nike',
        'Adidas',
        'Sony',
        'LG',
        'Canon',
        'Philips'
    ];

    const colors = [
        { name: 'Black', hex: '#000000' },
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Red', hex: '#FF0000' },
        { name: 'Blue', hex: '#0000FF' },
        { name: 'Green', hex: '#008000' },
        { name: 'Yellow', hex: '#FFFF00' },
        { name: 'Gray', hex: '#808080' },
        { name: 'Pink', hex: '#FFC0CB' }
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const toggleSelection = (item: string, selected: string[], setSelected: (items: string[]) => void) => {
        if (selected.includes(item)) {
            setSelected(selected.filter(i => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setSelectedColors([]);
        setSelectedSizes([]);
        setPriceRange([0, 1000]);
        setSelectedRating(null);
    };

    return (
        <div className="w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button 
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                >
                    Clear All
                </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleSelection(category, selectedCategories, setSelectedCategories)}
                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            placeholder="Min"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            placeholder="Max"
                        />
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Brands */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Brands</h3>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Customer Rating</h3>
                <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <label key={rating} className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="rating"
                                checked={selectedRating === rating}
                                onChange={() => setSelectedRating(rating)}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <div className="ml-2 flex items-center">
                                {[...Array(rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                                <span className="ml-1 text-sm text-gray-600">& Up</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => toggleSelection(color.name, selectedColors, setSelectedColors)}
                            className={`w-8 h-8 rounded-full border-2 ${
                                selectedColors.includes(color.name) 
                                    ? 'border-blue-600 ring-2 ring-blue-300' 
                                    : 'border-gray-300'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
                            className={`px-4 py-2 text-sm font-medium rounded-md border ${
                                selectedSizes.includes(size)
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Apply Filters Button */}
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Apply Filters
            </button>
        </div>
        
    );
}