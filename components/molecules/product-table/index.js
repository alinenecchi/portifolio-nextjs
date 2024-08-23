import React from "react";
import css from "./product-table.module.scss";

function ProductTable({ products, onEdit, onDelete, className = "" }) {
  return (
    <table className={`${css["product-table"]} ${className}`}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Categorias</th>
          <th>Preço</th>
          <th>Editar/Deletar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.categories}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
              <button onClick={() => onEdit(product)} className={css["button-edit"]}>
                ✏️
              </button>
              <button
                onClick={() => onDelete(product)}
                className={css["button-delete"]}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
