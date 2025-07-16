import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-all h-full flex flex-col">
      <img
        src={product.image}
        alt={product.name || "Product image"}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-lg font-bold">₹{product.price}</p>

      <button
        disabled={!product.inStock}
        onClick={() => addToCart(product)}
        className={`mt-auto w-full py-2 rounded font-semibold transition-colors ${
          !product.inStock
            ? "bg-gray-300 text-gray-700 cursor-not-allowed";
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
      </button>
    </div>
  );
};
export default ProductCard;
