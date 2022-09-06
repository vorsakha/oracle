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

export enum Signal {
  neutral = 0,
  bullish = 1,
  bearish = 2,
}

export type Signals = {
  BTCUSDT: {
    '4h': number;
    '1d': number;
    '1w': number;
  };
};

export type MainSignalTypes = {
  coinsData: {
    coin: string;
    currentPrice: string;
    previousDayChange: number;
    previousMonthChange: number;
    text: string;
    intervalChange: Signals['BTCUSDT'];
  }[];
  signal: Signals;
} | null;

interface MainSignalContextProps {
  handleGetMainSignal: () => Promise<void>;
  mainSignal: MainSignalTypes;
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
    const cachedSignal = await getItem();

    if (cachedSignal) setMainSignal(JSON.parse(cachedSignal));
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
        !cachedSignal ||
        new Date(JSON.parse(lastRequest as string)) > cacheExpiryTime
      ) {
        const { data } = await getMainSignal();

        setMainSignal(data.data);
        AsyncStorage.setItem('@lastRequest', JSON.stringify(new Date()));
      }

      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (mainSignal) setItem(JSON.stringify(mainSignal));
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
