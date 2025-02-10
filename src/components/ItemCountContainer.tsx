"use client";

import { useItem } from "@/providers/ItemProvider";
import ItemCount from "./ItemCount";
import styles from "@/styles/ItemCountContainer.module.css";

const ItemCountContainer = () => {
  const { items, itemCount } = useItem();

  return (
    <div>
      <button className={styles.basket}>Basket: {itemCount} items</button>
      {["Item 1", "Item 2", "Item 3", "Item 4"].map((itm) => {
        return (
          <ItemCount
            key={itm}
            name={itm}
            count={items.find((item) => item.name === itm)?.quantity}
          />
        );
      })}
    </div>
  );
};

export default ItemCountContainer;
