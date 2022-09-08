import React, { createContext, PropsWithChildren, useState } from 'react';
import { getSignal } from '../services/signal';

export const intervals = ['4h', '1d', '1w'];

export enum Interval {
  FOUR = '4h',
  DAY = '1d',
  WEEK = '1w',
}

export enum Signal {
  NEUTRAL = 0,
  BULLISH = 1,
  BEARISH = 2,
}

export type Signals = {
  '4h': {
    signal: number;
    change: number;
  };
  '1d': {
    signal: number;
    change: number;
  };
  '1w': {
    signal: number;
    change: number;
  };
};

export type SignalTypes = {
  coin: string;
  currentPrice: string;
  previousDayChange: number;
  previousMonthChange: number;
  text: string;
  intervalsData: Signals;
} | null;

interface SignalContextProps {
  handleGetSignal: (pair: string) => Promise<void>;
  signal: SignalTypes;
  signalLoading: boolean;
}

export const SignalContext = createContext<SignalContextProps>(
  {} as SignalContextProps,
);

export function SignalProvider({ children }: PropsWithChildren) {
  const [signal, setSignal] = useState<SignalTypes>(null);
  const [signalLoading, setLoading] = useState<boolean>(false);

  const handleGetSignal = async (pair: string) => {
    setLoading(true);

    try {
      const { data } = await getSignal(pair);

      setSignal(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <SignalContext.Provider value={{ handleGetSignal, signal, signalLoading }}>
      {children}
    </SignalContext.Provider>
  );
}
