import React, { useState, useEffect, useRef } from "react";
import { fetchProducts } from "../../utils/services/productService";
import ProductTable from "components/molecules/product-table";
import ProductForm from "components/molecules/product-form";
import Section from "components/atoms/section";
import css from "./management.module.scss";

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { initialProducts: products },
    revalidate: 60,
  };
}

function Management({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [productToEdit, setProductToEdit] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Hide the form when the user clicks outside of it
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const loadProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
  };

  const handleAddProduct = async (newProduct) => {
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    await loadProducts();
    setIsFormVisible(false);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setIsFormVisible(true);
  };

  const handleDeleteProduct = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    await loadProducts();
  };

  const handleUpdateProduct = async (updatedProduct) => {
    await fetch(`/api/products/${updatedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    await loadProducts();
    setProductToEdit(null);
    setIsFormVisible(false);
  };

  const handleShowAddForm = () => {
    setProductToEdit(null);
    setIsFormVisible(true);
  };

  const handleCancelForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Section className={css["page-products"]}>
      <h1>Gerenciamento de Produtos</h1>
      <button onClick={handleShowAddForm} className={css["button"]}>
        Adicionar Produto
      </button>
      <ProductTable
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      {isFormVisible && (
        <div ref={formRef} className={css["form-container"]}>
          <ProductForm
            onSubmit={productToEdit ? handleUpdateProduct : handleAddProduct}
            productToEdit={productToEdit}
            onCancel={handleCancelForm}
          />
        </div>
      )}
    </Section>
  );
}

export default Management;
