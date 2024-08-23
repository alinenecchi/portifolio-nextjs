import React, { useState } from "react";
import ProductTable from "components/molecules/ProductTable";
import ProductForm from "components/molecules/ProductForm";
import Section from "components/atoms/section";
import css from "./product-management.module.scss";

const dummyProducts = [
  { id: 1, name: "Produto 1", description: "Descrição 1", price: 100 },
  { id: 2, name: "Produto 2", description: "Descrição 2", price: 150 },
];

function ProductManagement() {
  const [products, setProducts] = useState(dummyProducts);
  const [productToEdit, setProductToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1 },
    ]);
    setShowForm(false);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowForm(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
    setProductToEdit(null);
    setShowForm(false);
  };

  return (
    <Section className={css["page-products"]}>
      <h1>Gerenciamento de Produtos</h1>
      <button onClick={() => setShowForm(true)} className={css["add-button"]}>
        +
      </button>
      {showForm && (
        <ProductForm
          onSubmit={productToEdit ? handleUpdateProduct : handleAddProduct}
          productToEdit={productToEdit}
          onCancel={() => {
            setProductToEdit(null);
            setShowForm(false);
          }}
        />
      )}
      <ProductTable
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </Section>
  );
}

export default ProductManagement;
