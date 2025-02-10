"use client";

import styles from "@/styles/Item.module.css";
import { MouseEventHandler } from "react";

interface ItemProps {
  index: number;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Item = ({ index, name, onClick }: ItemProps) => {
  return (
    <button
      className={styles.card}
      onClick={onClick}
      aria-label="Add to basket"
    >
      <h2>
        {name} <span>-&gt;</span>
      </h2>
      <p>Item {index + 1}</p>
    </button>
  );
};

export default Item;
