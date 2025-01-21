"use client";

import { useParams } from "next/navigation";
import { products } from "../../_components/Products";
import Image from "next/image";
import { useCartStore } from "../../_components/cartStore";


const ProductDetails = () => {
  const { productId } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // Find the product by ID
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-between md:flex-row gap-4">
        {/* Main Product Image */}
        <div className="flex-1">
          {product.images.length > 0 && (
            <Image
              src={product.images[0].image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">₦{product.price}</p>
          
          
          <p className="mb-4">
            <span
              className={`font-medium ${
                product.inStock ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Category: {product.category}
          </p>

          {/* Product Color Options */}
          <div className="flex items-center gap-2">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border border-gray-300"
                style={{ backgroundColor: img.colorCode }}
              ></div>
            ))}

          </div>
            <button
        onClick={() => {
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          });
          console.log("Added to cart", " " +   product.name + " " + product.price + product.images[0].image);
        }}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
