import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../common';
import {
  ItemText,
  ItemWrapper,
  List,
  PairDescription,
  PairText,
  Separator,
} from './styles';
import { routes } from '../../routes';

interface PairProps {
  items: string[];
}

function Pair({ items }: PairProps) {
  const { navigate } = useNavigation();

  const renderItem = ({ item }) => (
    <ItemWrapper onPress={() => navigate(routes.SIGNAL, { pair: item })}>
      <ItemText>{item}</ItemText>
    </ItemWrapper>
  );

  return (
    <Container>
      <PairText>Pairs</PairText>
      <PairDescription>All possible pairs</PairDescription>

      <List
        data={items}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default Pair;
