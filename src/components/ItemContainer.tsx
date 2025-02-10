"use client";

import { useItem } from "@/providers/ItemProvider";
import styles from "@/styles/ItemContainer.module.css";
import Item from "./Item";

const Items = [
  { id: "Item 1", name: "Foo" },
  { id: "Item 2", name: "Bar" },
  { id: "Item 3", name: "Baz" },
  { id: "Item 4", name: "Qux" },
];

const ItemContainer = () => {
  const { addToCart } = useItem();

  return (
    <div className={styles.grid}>
      {Items.map((item, index) => {
        return (
          <Item
            key={item.id}
            index={index}
            name={item.name}
            onClick={() => addToCart(item.id, item.name)}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
