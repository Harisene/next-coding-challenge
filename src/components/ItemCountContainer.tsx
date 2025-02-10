"use client";

import { useItem } from "@/providers/ItemProvider";
import ItemCount from "./ItemCount";
import styles from "@/styles/ItemCountContainer.module.css";

const ItemCountContainer = () => {
  const { items: todoList, itemCount: todosCount } = useItem();

  return (
    <div>
      <button className={styles.basket}>Basket: {todosCount} items</button>
      {["Item 1", "Item 2", "Item 3", "Item 4"].map((item) => {
        return (
          <ItemCount
            key={item}
            name={item}
            count={todoList.find((todo) => todo.name === item)?.quantity}
          />
        );
      })}
    </div>
  );
};

export default ItemCountContainer;
