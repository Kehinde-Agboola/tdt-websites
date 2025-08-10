
"use client";

import { useState, useEffect } from "react";
import { getProductById } from "../../libs/api/product";
import type { Product } from "../../libs/type";
import ProductPageLayout from "./_components/ProductPageLayout";
import LoadingState from "./_components/LoadingState";
import NotFoundState from "./NotFoundState";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductPage({ params }: PageProps) {
  const [productId, setProductId] = useState<number | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Handle async params
  useEffect(() => {
    const initializeParams = async () => {
      const resolvedParams = await params;
      const id = Number.parseInt(resolvedParams.id);
      setProductId(id);
    };
    initializeParams();
  }, [params]);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;

      try {
        setLoading(true);
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <LoadingState />;
  if (!product) return <NotFoundState />;

  return <ProductPageLayout product={product} />;
}
