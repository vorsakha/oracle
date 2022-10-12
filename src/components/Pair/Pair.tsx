import React from 'react';
import { intervals, Signals } from '../../context/mainSignal';
import { getSignalString, getTimeFrameString } from '../../util';
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
} from './styles';

interface PairProps {
  name: string;
  intervalsData: Signals | undefined;
  price: string | undefined;
  dayChange: number | undefined;
  monthChange: number | undefined;
}

function Pair({
  name,
  intervalsData,
  price,
  dayChange,
  monthChange,
}: PairProps) {
  const data = intervalsData
    ? intervals.map(i => ({
        timeframe: getTimeFrameString(i),
        signal: getSignalString(intervalsData[i].signal),
        change: intervalsData[i].change,
      }))
    : [];

  const renderItem = ({ item }) => (
    <Card>
      <PairText>{item.timeframe}</PairText>
      <PairSignal signal={item.signal}>{item.signal}</PairSignal>
      <PairChangeWrapper>
        <PairText>{item.timeframe} Change:</PairText>
        <PairChange isPositive={item.change > 0}>{item.change}%</PairChange>
      </PairChangeWrapper>
    </Card>
  );

  return (
    <Container center>
      <PairName testID="pair">{name}</PairName>
      <PairPrice testID="price">{price}</PairPrice>

      <PairChangeWrapper>
        <PairText>Daily change:</PairText>
        <PairChange
          testID="day-change"
          isPositive={!!dayChange && dayChange > 0}
        >
          {dayChange}%
        </PairChange>
      </PairChangeWrapper>
      <PairChangeWrapper>
        <PairText>Monthly change:</PairText>
        <PairChange
          testID="month-change"
          isPositive={!!monthChange && monthChange > 0}
        >
          {monthChange}%
        </PairChange>
      </PairChangeWrapper>

      <List
        testID="signal-list"
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
