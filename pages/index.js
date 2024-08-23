import React, { useEffect, useState } from "react";
import Section from "components/atoms/section";
import css from "./home.module.scss";
import Card from "components/molecules/card";

export async function getStaticProps() {
  try {
    const apiUrl = `${process.env.API_URL}/all`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    return {
      props: { products },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: { products: [] },
    };
  }
}

function Home({ products, ...props }) {
  const { className = "" } = props;
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    if (products.length === 0) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [products]);

  const featuredProduct = products.length > 0 ? products[featuredIndex] : null;

  return (
    <Section>
      <div className={`${css["container"]} ${className}`}>
        <header className={css["header"]}>
          <h1>Bem-vindo ao Nosso Site</h1>
          <p>Explore nossos produtos e soluções inovadoras.</p>
        </header>

        {featuredProduct ? (
          <section className={`${css["card-list"]} ${css["featured-product"]}`}>
            <h2>Produto em Destaque</h2>
            <Card
              key={featuredProduct.id}
              data={featuredProduct}
              className={css["product-card"]}
            />
          </section>
        ) : (
          <section className={`${css["card-list"]} ${css["featured-product"]}`}>
            <h2>Produto em Destaque</h2>
            <p>Sem produtos disponíveis no momento.</p>
          </section>
        )}

        <footer className={css["footer"]}>
          <p>
            &copy; {new Date().getFullYear()} Nossa Empresa. Todos os direitos
            reservados.
          </p>
        </footer>
      </div>
    </Section>
  );
}

export default Home;
