import { Signal } from '../context/mainSignal';

export const getSignalString = (signal: number) => {
  if (signal === Signal.neutral) return 'Neutral Signal';

  if (signal === Signal.bullish) return 'Bullish Signal';

  return 'Bearish Signal';
};
