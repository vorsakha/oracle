import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { getPairs } from '../services/pairs';

interface PairsContextProps {
  handleGetPairs: () => Promise<void>;
  pairs: string[] | null;
  pairsLoading: boolean;
}

export const PairsContext = createContext<PairsContextProps>(
  {} as PairsContextProps,
);

export function PairsProvider({ children }: PropsWithChildren) {
  const [pairs, setPairs] = useState<PairsContextProps['pairs']>(null);
  const [pairsLoading, setLoading] = useState(false);

  const { getItem, setItem } = useAsyncStorage('@pairs');

  const handleCache = async () => {
    setLoading(true);
    try {
      const cachedPairs = await getItem();

      if (cachedPairs) setPairs(JSON.parse(cachedPairs));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleGetPairs = async () => {
    setLoading(true);
    try {
      const cachedPairs = await getItem();

      if (cachedPairs === 'null') {
        const response = await getPairs();

        setPairs(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setItem(JSON.stringify(pairs));
  }, [pairs]);

  useEffect(() => {
    handleCache();
  }, []);

  return (
    <PairsContext.Provider value={{ handleGetPairs, pairs, pairsLoading }}>
      {children}
    </PairsContext.Provider>
  );
}
