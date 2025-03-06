'use client'
import { StaticImageData } from 'next/image';
import Image from 'next/image';
// import 
interface ProductDetailsProps { 
    product: {
        id: string;
        name: string;
        price: number;
        category: string;
        inStock: boolean;
        images: { image: string | StaticImageData }[];
    }
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
      if (!product?.images || !Array.isArray(product.images)) {
        console.error("Invalid or missing images array:", product.images);
        return <div>No images available for this product.</div>;
  }
    const resolveImageSrc = (image: string | StaticImageData): string =>
      typeof image === "string" ? image : image?.src || "";
  return (
    <div key={product.id}>
      {product.images.length > 0 && (
        <Image src={resolveImageSrc(product.images[0].image)} alt={product.name} objectFit='fit' />
       
      )}
      <p
        className={`text-sm ${
          product.inStock ? "text-green-500" : "text-red-500"
        }`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <p className="p-[5rem]">{product.name}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductDetails;