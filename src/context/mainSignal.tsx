import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { getMainSignal } from '../services/signal';

interface MainSignalContextProps {
  handleGetMainSignal: () => Promise<void>;
  mainSignal: {
    coinData: {
      coin: string;
      currentPrice: string;
      previousDayChange: number;
      previousMonthChange: number;
      text: string;
    }[];
    signal: {
      BTCUSDT: {
        '4h': {
          bullish: boolean;
          bearish: boolean;
          neutral: boolean;
        };
        '1d': {
          bullish: boolean;
          bearish: boolean;
          neutral: boolean;
        };
        '1w': {
          bullish: boolean;
          bearish: boolean;
          neutral: boolean;
        };
      };
    };
  } | null;
  mainSignalLoading: boolean;
}

export const MainSignalContext = createContext<MainSignalContextProps>(
  {} as MainSignalContextProps,
);

export function MainSignalProvider({ children }: PropsWithChildren) {
  const [mainSignal, setMainSignal] =
    useState<MainSignalContextProps['mainSignal']>(null);
  const [mainSignalLoading, setLoading] = useState(false);

  const { getItem, setItem } = useAsyncStorage('@mainSignal');

  const handleCache = async () => {
    setLoading(true);
    try {
      const cachedSignal = await getItem();

      if (cachedSignal) setMainSignal(JSON.parse(cachedSignal));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleGetMainSignal = async () => {
    setLoading(true);
    try {
      const cacheIntervalInHours = 24;
      const cacheExpiryTime = new Date();
      cacheExpiryTime.setHours(
        cacheExpiryTime.getHours() + cacheIntervalInHours,
      );
      const lastRequest = await AsyncStorage.getItem('@lastRequest');

      const cachedSignal = await getItem();

      if (
        cachedSignal === 'null' ||
        new Date(JSON.parse(lastRequest as string)) > cacheExpiryTime
      ) {
        const response = await getMainSignal();

        setMainSignal(response.data);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setItem(JSON.stringify(mainSignal));
  }, [mainSignal]);

  useEffect(() => {
    handleCache();
  }, []);

  return (
    <MainSignalContext.Provider
      value={{ handleGetMainSignal, mainSignal, mainSignalLoading }}
    >
      {children}
    </MainSignalContext.Provider>
  );
}
