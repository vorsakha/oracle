import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
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
    const cachedPairs = await getItem();

    if (cachedPairs) setPairs(JSON.parse(cachedPairs));
  };

  const handleGetPairs = async () => {
    setLoading(true);
    try {
      const cacheIntervalInHours = 24;
      const cacheExpiryTime = new Date();
      cacheExpiryTime.setHours(
        cacheExpiryTime.getHours() + cacheIntervalInHours,
      );

      const lastRequest = await AsyncStorage.getItem('@lastRequestPairs');

      const cachedPairs = await getItem();

      if (
        cachedPairs === 'null' ||
        new Date(JSON.parse(lastRequest as string)) > cacheExpiryTime
      ) {
        const response = await getPairs();

        setPairs(response.data.data);
        AsyncStorage.setItem('@lastRequestPairs', JSON.stringify(new Date()));
      }

      setLoading(false);
    } catch {
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
