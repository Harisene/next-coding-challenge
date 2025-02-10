"use client";

import { Item } from "@/models/item";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextValues {
  items: Item[];
  itemCount: number;
  addToCart: (newItemId: string, newItemName: string) => void;
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

  const addToCart = (newItemId: string, newItemName: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItemId);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevItems,
          { id: newItemId, name: newItemName, quantity: 1 },
        ];
      }
    });
    setItemCount((prevCount) => prevCount + 1);
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        itemCount,
        addToCart,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItem must be used within an ItemProvider");
  }
  return context;
};

export default ItemProvider;
