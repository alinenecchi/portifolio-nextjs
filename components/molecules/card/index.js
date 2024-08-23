import React from "react";
import css from "./card.module.scss";

import { useRouter } from "next/router";

function Card(props) {
  const { data, className = "" } = props;

  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/products/${data?.id}`);
  };

  return (
    <div className={`${css["card"]} ${className}`}>
      <img src={data.image} alt={data?.name} className={css["image"]} />
      <div className={css["details"]}>
        <h3 className={css["name"]}>{data?.name}</h3>
        <p className={css["description"]}>{data?.description}</p>
        <p className={css["price"]}>${data?.price?.toFixed(2)}</p>
        <button onClick={handleButtonClick} className={css["button"]}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default Card;
