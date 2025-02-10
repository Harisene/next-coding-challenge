"use client";

import { Item } from "@/models/item";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextValues {
  items: Item[];
  itemCount: number;
  addToCart: (newItem: string) => void;
}

const initialValues: ContextValues = {
  items: [],
  itemCount: 0,
  addToCart: () => {},
};

const ItemContext = createContext<ContextValues>(initialValues);

const ItemProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (newItem: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === newItem);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === newItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { name: newItem, quantity: 1 }];
      }
    });
    setItemCount((prevCount) => prevCount + 1);
  };

  return (
    <ItemContext.Provider
      value={{
        items: items,
        itemCount,
        addToCart,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => useContext(ItemContext);

export default ItemProvider;
