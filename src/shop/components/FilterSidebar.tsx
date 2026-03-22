import {  useState } from 'react';
import { useSearchParams } from 'react-router';
import type { Category} from '@/mocks/categories.mock' 


interface Props {
    categories: Category[]
}

export const FilterSidebar = ({ categories }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    //search product

    const [search, setSearch] = useState(searchParams.get('q') || '');
    const handleSearch = ( event: React.KeyboardEvent<HTMLInputElement>) => { 
        if(event.key === 'Enter') {
            searchParams.set('q', search);
            searchParams.set('page', '1'); 
            setSearchParams(searchParams);
        } 
    }

    const  currentCategories = searchParams.get('category')?.split(',') || [];//Electronic, Clothing, Home 

    const handleCategoryToggle = (category: string) => {
        //if exists includes(category)? then remove it : otherwise add it
        const updatedCategories = currentCategories.includes(category)
            ? currentCategories.filter(c => c !== category)
            : [...currentCategories, category];
        searchParams.set('category', updatedCategories.join(','));
        searchParams.set('page', '1');
        setSearchParams(searchParams);
    }; 
    
    
    const currentMinPrice = Number(searchParams.get('minprice') || '0');
    const currentMaxPriceParam = searchParams.get('maxprice');
    const currentMaxPrice = currentMaxPriceParam ? Number(currentMaxPriceParam) : undefined;

    const priceRanges = [
        { label: '$0 - $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $150', min: 100, max: 150 },
        { label: '$150 - $500', min: 150, max: 500 },
        { label: '$500+', min: 500 , max: undefined },
    ];

    const handlePriceChange = (min: number, max?: number) => {
        searchParams.set('minprice', String(min));
        if (max !== undefined) { 
            searchParams.set('maxprice', String(max));
        } else {
            searchParams.delete('maxprice');
        }

        setSearchParams(searchParams);
    }
  

    const clearAllFilters = () => { 
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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
                    {priceRanges.map((range) => {
                        const isActive = currentMinPrice === range.min && currentMaxPrice === range.max;

                        return (
                            <button
                                key={range.label}
                                type="button"
                                onClick={() => handlePriceChange(range.min, range.max)}
                                className={`w-full text-left px-3 py-2 rounded-md border text-sm transition-colors ${
                                    isActive
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                                }`}
                            >
                                {range.label}
                            </button>
                        );
                    })}
                </div>
            </div> 
        </div>
        
    );
}