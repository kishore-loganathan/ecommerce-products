import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import ProductCard from "../components/ProductCard";
import CartSummary from "../components/CartSummary";
const ProductList = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);  
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockFilter, setStockFilter] = useState("All");
  if (loading) return <p className="p-4">Loading products...</p>;
  if (error) return <p className="p-4 text-red-500">Error fetching products</p>;
  const categories = ["All", ...new Set(data.products.map((p) => p.category))];
  const filteredProducts = data.products.filter((product) => {
    const matchCategory =
      categoryFilter === "All" || product.category === categoryFilter;
    const matchStock =
      stockFilter === "All" ||
      (stockFilter === "In Stock" && product.inStock) ||
      (stockFilter === "Out of Stock" && !product.inStock);
    return matchCategory && matchStock;
  });
  return (
    <>
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-4 py-2 rounded shadow"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="border px-4 py-2 rounded shadow"
          >
            <option value="All">All Stock</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600">
            No products match the selected filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
