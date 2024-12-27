const FilterBar = () => {
    return (
      <div className="bg-rose-50 flex items-center justify-between p-4 rounded-lg shadow mb-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <span>🔎</span>
            <span>Filter</span>
          </button>
          <p className="text-gray-500">Showing 1-16 of 32 results</p>
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-700">Sort By:</label>
          <select className="border rounded px-2 py-1 text-gray-700">
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default FilterBar;
  