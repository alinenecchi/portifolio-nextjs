/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useRouter } from "next/router";
import Section from "../../components/atoms/section";
import Button from "../../components/atoms/button";
import Title from "components/atoms/title";

import css from "./product.module.scss";

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product || Object.keys(product).length === 0) {
    return <div>Product not found.</div>;
  }

  return (
    <Section className={css["product-page"]}>
      <Title level={1} className={css["product-title"]}>
        {product?.name}
      </Title>
      <img
        src={product?.image}
        alt={product?.name}
        className={css["product-image"]}
      />
      <p className={css["product-price"]}>Price: ${product?.price}</p>
      <p className={css["product-brand"]}>Brand: {product?.brand}</p>
      <p className={css["product-category"]}>Category: {product?.categories}</p>

      <Button onClick={() => router.back()} className={css["back-button"]}>
        Go Back
      </Button>
    </Section>
  );
};

// Fetching the product data on the server side using your API route
export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`${process.env.API_URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const product = await res.json();

    return {
      props: {
        product,
        revalidate: 60,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: { product: {} },
    };
  }
}

export default ProductPage;
