"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";


type ProductCardProps = {
  id: string;
  name: string;
  image: string | StaticImageData;
  price: number;
  category: string;
  inStock: boolean;
};



const ProductCard: React.FC<ProductCardProps> = ({ id, name,image, price, }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`ShopForGood/products/${id}`)}
      className="col-span-1 text-center bg-[#e9e9e9] hover:bg-white p-2 transition hover:scale-105"
    >
      <div className="flex flex-col w-full gap-1 cursor-pointer">
        <div className="aspect-square overflow-x-hidden relative w-full ">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p>₦{price}</p>
          <p> {name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
