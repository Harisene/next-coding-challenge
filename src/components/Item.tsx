"use client";

import styles from "@/styles/Item.module.css";
import { MouseEventHandler } from "react";

interface ItemProps {
  item: string;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Item = ({ item, name, onClick }: ItemProps) => {
  return (
    <button
      className={styles.card}
      onClick={onClick}
      aria-label="Add to basket"
    >
      <h2>
        {item} <span>-&gt;</span>
      </h2>
      <p>{name}</p>
    </button>
  );
};

export default Item;
