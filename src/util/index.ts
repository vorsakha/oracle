import { Interval, Signal } from '../context/mainSignal';

export enum NormalizedSignal {
  NEUTRAL = 'Neutral Signal',
  BULLISH = 'Bullish Signal',
  BEARISH = 'Bearish Signal',
}

export const getSignalString = (signal: number) => {
  if (signal === Signal.NEUTRAL) return NormalizedSignal.NEUTRAL;

  if (signal === Signal.BULLISH) return NormalizedSignal.BULLISH;

  return NormalizedSignal.BEARISH;
};

export const getTimeFrameString = (timeFrame: string) => {
  if (timeFrame === Interval.FOUR) return 'Short Term';

  if (timeFrame === Interval.DAY) return 'Medium Term';

  return 'Long Term';
};
