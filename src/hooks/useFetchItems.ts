import { useEffect, useState } from 'react';
import { useItemsContext } from '@/context/items-context';
import { list } from '@/services/item';

export function useFetchItems() {
  const { setItems, items } = useItemsContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchItems = async () => {
    setLoading(true);
    try {
      const res = await list();
      setItems(res.data);
    } catch (error) {
      setError(`Error fetching items: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { items, loading, error };
}
