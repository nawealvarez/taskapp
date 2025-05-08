import { createContext, useContext, useState } from 'react';
import type { Item } from '@/types/item';

interface ItemsContextValue {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemsContext = createContext<ItemsContextValue | undefined>(undefined);

export function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItemsContext must be used within an ItemsProvider');
  }
  return context;
}
