import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { fetchProducts, addProduct, updateProduct } from "../../utils/services/productService";
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
  const router = useRouter();

  const loadProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
  };

  const handleAddProduct = async (newProduct) => {
    try {
      await addProduct(newProduct);
      setIsFormVisible(false);
      router.replace(router.asPath);
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao adicionar o produto");
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await updateProduct(updatedProduct);
      setProductToEdit(null);
      setIsFormVisible(false);
      router.replace(router.asPath);
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao atualizar o produto");
    }
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setIsFormVisible(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      await loadProducts();
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao excluir o produto");
    }
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
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            productToEdit={productToEdit}
            onCancel={handleCancelForm}
          />
        </div>
      )}
    </Section>
  );
}

export default Management;
