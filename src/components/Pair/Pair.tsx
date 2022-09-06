import React from 'react';
import { Signals } from '../../context/mainSignal';
import { getSignalString } from '../../util';
import Card from '../Card';
import { Container } from '../common';
import {
  List,
  PairChange,
  PairChangeWrapper,
  PairName,
  PairPrice,
  PairSignal,
  PairText,
  Separator,
  PairWrapper,
} from './styles';

interface PairProps {
  name: string;
  signal: Signals['BTCUSDT'] | undefined;
  price: string | undefined;
  dayChange: number | undefined;
  monthChange: number | undefined;
  intervalChange: Signals['BTCUSDT'] | undefined;
}

function Pair({
  name,
  signal,
  price,
  dayChange,
  monthChange,
  intervalChange,
}: PairProps) {
  const data = signal
    ? [
        {
          timeframe: 'Short term',
          signal: getSignalString(signal['4h']),
          interval: '4h',
        },
        {
          timeframe: 'Medium term',
          signal: getSignalString(signal['1d']),
          interval: '1d',
        },
        {
          timeframe: 'Long term',
          signal: getSignalString(signal['1w']),
          interval: '1w',
        },
      ]
    : [];

  const renderItem = ({ item }) => (
    <Card>
      <PairName>{item.timeframe}</PairName>
      <PairSignal>{item.signal}</PairSignal>
      <PairChangeWrapper>
        <PairText>{item.timeframe} Change:</PairText>
        <PairChange
          isPositive={!!intervalChange && intervalChange[item.interval] > 0}
        >
          {!!intervalChange && intervalChange[item.interval]}%
        </PairChange>
      </PairChangeWrapper>
    </Card>
  );

  return (
    <Container>
      <PairName>{name}</PairName>
      <PairPrice>{price}</PairPrice>

      <PairWrapper>
        <PairChangeWrapper>
          <PairText>Daily change:</PairText>
          <PairChange isPositive={!!dayChange && dayChange > 0}>
            {dayChange}%
          </PairChange>
        </PairChangeWrapper>
        <PairChangeWrapper>
          <PairText>Monthly change:</PairText>
          <PairChange isPositive={!!monthChange && monthChange > 0}>
            {monthChange}%
          </PairChange>
        </PairChangeWrapper>
      </PairWrapper>

      <List
        data={data}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
      />
    </Container>
  );
}

export default Pair;
