"use client";

import { useItem } from "@/providers/ItemProvider";
import styles from "@/styles/ItemContainer.module.css";
import Item from "./Item";

const Items = [
  { item: "Item 1", name: "Foo" },
  { item: "Item 2", name: "Bar" },
  { item: "Item 3", name: "Baz" },
  { item: "Item 4", name: "Qux" },
];

const ItemContainer = () => {
  const { addToCart } = useItem();

  return (
    <div className={styles.grid}>
      {Items.map((item) => {
        return (
          <Item
            key={item.item}
            name={item.name}
            item={item.item}
            onClick={() => addToCart(item.item)}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
