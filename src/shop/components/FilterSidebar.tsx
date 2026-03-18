import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import type { Category} from '@/mocks/categories.mock' 


interface Props {
    categories: Category[]
}

export const FilterSidebar = ({ categories }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    //search product

    const searchInput = useRef<HTMLInputElement>(null);
    const handleSearch = ( event: React.KeyboardEvent<HTMLInputElement>) => { 
        if(event.key === 'Enter' && searchInput.current) {
            setSearchParams({ search: searchInput.current.value, page: "1" });
        } 
    }

    const  currentCategories = searchParams.get('category')?.split(',') || [];//Electronic, Clothing, Home 

    const handleCategoryToggle = (category: string) => {
        //if exists includes(category)? then remove it : otherwise add it
        const updatedCategories = currentCategories.includes(category)
            ? currentCategories.filter(c => c !== category)
            : [...currentCategories, category];
        setSearchParams({ category: updatedCategories.join(','), page: "1" }); 
    }; 
    
    
    const currentMinPrice = searchParams.get('minprice') || '0';
    const currentMaxPrice = searchParams.get('maxprice') || '1000';
    const [priceRange, setPriceRange] = useState<[number, number]>([Number(currentMinPrice), Number(currentMaxPrice)]); 
    
    const handlePriceChange = (min: number, max: number) => {
        setPriceRange([min, max]);
        setSearchParams({ minprice: String(min), maxprice: String(max), page: "1" }); 
    }
  

    const clearAllFilters = () => { 
        setPriceRange([0, 1000]); 
        setSearchParams({ page: "1" }); 
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

            {/* Search */}
            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        ref={searchInput}
                        onKeyDown={handleSearch}
                    />
                    <svg 
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category.id} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox" 
                                checked={currentCategories.includes(category.name)}
                                onChange={() => handleCategoryToggle(category.name)}
                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{category.name}</span>
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
                            onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            placeholder="Min"
                        />
                        <span className="text-gray-500">-</span>
                        <input
                            type="number" 
                            value={priceRange[1]}
                            onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            placeholder="Max"
                        />
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div> 
        </div>
        
    );
}