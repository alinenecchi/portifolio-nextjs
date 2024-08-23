import React from "react";
import css from "./product-table.module.scss";

function ProductTable({ products, onEdit, onDelete, className = "" }) {
  return (
    <table className={`${css["product-table"]} ${className}`}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
              <button onClick={() => onEdit(product)} className={css["button-edit"]}>
                ✏️
              </button>
              <button
                onClick={() => onDelete(product.id)}
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
