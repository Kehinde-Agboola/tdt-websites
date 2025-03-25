import TrendingItems from "../../_components/Trending";
import ProductGrid from "../../_components/product-grid";
// import Link from "next/link";
export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div>
      <TrendingItems
        title={`${
          params.category.charAt(0).toUpperCase() + params.category.slice(1)
        } Collection`}
        category={params.category}
        showFilters={false}
        limit={12}
      />
      {/* <Link href={'/ShopForGood/product/[id]'} as={'/ShopForGood/product/1'}> */}
      <ProductGrid/>
      {/* </Link> */}
    </div>
  );
}
