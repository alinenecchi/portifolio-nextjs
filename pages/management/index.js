import React, { useState, useRef } from "react";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../utils/services/productService";
import ProductTable from "components/molecules/product-table";
import ProductForm from "components/molecules/product-form";
import Section from "components/atoms/section";
import Modal from "components/molecules/modal";
import css from "./management.module.scss";

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { initialProducts: products },
    revalidate: 60,
  };
}

function Management({ initialProducts }) {
  const [productToEdit, setProductToEdit] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const formRef = useRef(null);

  const handleAddProduct = async (newProduct) => {
    await addProduct(newProduct);
  };

  const handleUpdateProduct = async (product) => {
    await updateProduct(product);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setIsFormVisible(true);
  };

  const handleDeleteProduct = async (product) => {
    try {
      await deleteProduct(product?.id);
      setIsModalVisible(false);
      alert(
        `Produto name:${productToDelete?.name} id:${productToDelete?.id} deletado com sucesso`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao excluir o produto");
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  const showDeleteConfirmation = (product) => {
    setProductToDelete(product);
    setIsModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      handleDeleteProduct(productToDelete);
    }
  };

  const handleCancelDelete = () => {
    setIsModalVisible(false);
    setProductToDelete(null);
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
        products={initialProducts}
        onEdit={handleEditProduct}
        onDelete={showDeleteConfirmation}
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
      <Modal
        isVisible={isModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        message={`Você tem certeza que deseja excluir o produto "${productToDelete?.name}"?`}
      />
    </Section>
  );
}

export default Management;
