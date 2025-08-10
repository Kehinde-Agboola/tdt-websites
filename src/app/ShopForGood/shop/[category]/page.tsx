import TrendingItems from "../../_components/Trending";
import ProductGrid from "../../_components/product-grid";
import Link from "next/link";
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const awaitedParams = await params;

  return (
    <div>
      <TrendingItems
        title={`${
          awaitedParams.category.charAt(0).toUpperCase() +
          awaitedParams.category.slice(1)
        } Collection`}
        category={awaitedParams.category}
        showFilters={false}
      />
      <Link
        href={"/ShopForGood/product/[id]"}
        as={"/ShopForGood/product/1"}
      >
        <ProductGrid />
      </Link>
      /
    </div>
  );
}
