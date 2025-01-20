'use client'
import { StaticImageData } from "next/image";
import Image from "next/image"
import { useRouter } from "next/navigation";
interface ProductCardProps {
  data: any;  
}
const ProductCard: React.FC<ProductCardProps> = ({data}) => {
  const router = useRouter()
    return (
      <div
        onClick={() => router.push(`ShopForGood/products/${data.id}`)}
        className="col-span-1 text-center bg-[#e9e9e9] hover:bg-white p-2 transition hover:scale-105"
      >
        <div className="flex flex-col w-full gap-1">
          <div className="aspect-square overflow-x-hidden relative w-full ">
            <Image
              src={data.images[0].image}
              alt={data.name}
              fill
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            {data.name}
            <p>₦{data.price}</p>
          </div>
        </div>
      </div>
    );
}

export default ProductCard;