import React from "react";
import CardList from "../../components/molecules/card-list";
import Section from "components/atoms/section";

import { fetchProducts } from "../../utils/services/productService";

import css from "./product.module.scss";

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
    revalidate: 60,
  };
}

function ProductsPage({ products, ...props }) {
  const { className = "" } = props;
  return (
    <Section className={`${css["page-products"]} ${className}`}>
      <h1>Lista de produtos</h1>
      <CardList data={products} />
    </Section>
  );
}

export default ProductsPage;
