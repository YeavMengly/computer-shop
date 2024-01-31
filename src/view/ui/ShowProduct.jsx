import React from "react";

const ShowProduct = ({ product }) => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
      <div className="flex justify-between mb-4">
        <img
          src={"http://127.0.0.1:8000/images/" + product.image}
          alt={product.image}
          className="h-64 w-64 object-cover"
        />
        <div className="ml-4">
          <p className="text-sm text-gray-700 mb-2">{product.description}</p>
          <p className="text-sm font-medium text-gray-900">{product.price} $</p>
        </div>
      </div>
      <p className="text-sm text-gray-500">Created at: {product.created_at}</p>
      <p className="text-sm text-gray-500">Updated at: {product.updated_at}</p>
    </div>
  );
};

export default ShowProduct;
