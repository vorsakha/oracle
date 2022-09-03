import React from 'react';
import { Signals } from '../../context/mainSignal';
import { getSignalString } from '../../util';
import { Container } from '../common';
import {
  PairChange,
  PairChangeWrapper,
  PairName,
  PairPrice,
  PairSignal,
  PairWrapper,
} from './styles';

interface PairProps {
  name: string;
  signal: Signals | undefined;
  price: string | undefined;
  dayChange: number | undefined;
  monthChange: number | undefined;
}

function Pair({ name, signal, price, dayChange, monthChange }: PairProps) {
  return (
    <Container center>
      <PairWrapper>
        <PairName>{name}</PairName>
        <PairSignal>
          {!!signal && getSignalString(signal.BTCUSDT['1d'])}
        </PairSignal>
        <PairPrice>{price}</PairPrice>
        <PairChangeWrapper>
          Daily change:{' '}
          <PairChange isPositive={!!dayChange && dayChange > 0}>
            {dayChange}%
          </PairChange>
        </PairChangeWrapper>
        <PairChangeWrapper>
          Monthly change:{' '}
          <PairChange isPositive={!!monthChange && monthChange > 0}>
            {monthChange}%
          </PairChange>
        </PairChangeWrapper>
      </PairWrapper>
    </Container>
  );
}

export default Pair;
