import React, { useState, useEffect } from "react";
import css from "./product-form.module.scss";

function ProductForm({ onSubmit, productToEdit, className = "", onCancel }) {
  const [product, setProduct] = useState({
    id: "",
    image: "",
    name: "",
    categories: "",
    price: "",
    brand: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      setProduct({
        id: "",
        image: "",
        name: "",
        categories: "",
        price: "",
        brand: "",
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/products", {
        method: productToEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to submit product");
      }

      await response.json();
      alert("Produto salvo com sucesso"); // Mostrar mensagem de sucesso

      onSubmit(product); // Chama onSubmit após salvar
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao salvar o produto");
    }
  };

  return (
    <form
      className={`${css["product-form"]} ${className}`}
      onSubmit={handleSubmit}
    >
      <div className={css["form-group"]}>
        <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={product.id}
          onChange={handleChange}
          disabled={!!productToEdit} // Desabilita o campo se estiver editando
          required
        />
      </div>
      <div className={css["form-group"]}>
        <label htmlFor="image">Imagem URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css["form-group"]}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css["form-group"]}>
        <label htmlFor="categories">Categorias:</label>
        <input
          type="text"
          id="categories"
          name="categories"
          value={product.categories}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css["form-group"]}>
        <label htmlFor="price">Preço:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>
      <div className={css["form-group"]}>
        <label htmlFor="brand">Marca:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={css["button"]}>
        {productToEdit ? "Atualizar Produto" : "Adicionar Produto"}
      </button>
      <button type="button" onClick={onCancel} className={css["button"]}>
        Cancelar
      </button>
    </form>
  );
}

export default ProductForm;
