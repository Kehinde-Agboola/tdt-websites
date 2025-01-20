import React from 'react'
import ProductDetails from '../../_components/ProductDetails';
import { products } from '../../_components/Products';
interface IPrams{
    id?: string;
}
const page = ({ params }: { params: IPrams }) => {
 console
  return (
    <div>
      { <ProductDetails product={products.map(product => ({
        ...product,
        images: product.images.map(image => ({ image: image.image })),
        name: product.name,
        id: product.id,
        category: product.category,
        price: product.price,
        stock: product.inStock

      }))} />}
    </div>
  );
};

export default page