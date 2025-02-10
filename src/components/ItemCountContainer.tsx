"use client";

import { useItem } from "@/providers/ItemProvider";
import strings from "@/resources/strings";
import styles from "@/styles/ItemCountContainer.module.css";
import ItemCount from "./ItemCount";

const ItemCountContainer = () => {
  const { items, itemCount } = useItem();

  return (
    <div className={styles.basketContainer}>
      <button className={styles.basket}>
        {strings.basket}: {itemCount} {strings.items}
      </button>
      {items.map((item) => (
        <ItemCount key={item.id} name={item.name} count={item.quantity} />
      ))}
    </div>
  );
};

export default ItemCountContainer;
