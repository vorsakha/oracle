import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container } from '../common';
import {
  ItemText,
  ItemWrapper,
  List,
  PairDescription,
  PairText,
  Separator,
} from './styles';
import { routes } from '../../constants';

interface PairProps {
  items: string[] | null;
  title?: string;
  description?: string;
}

function Pair({
  items,
  title = 'Pairs',
  description = 'All possible pairs',
}: PairProps) {
  const { navigate, setParams } = useNavigation();

  const { name } = useRoute();

  const handleParams = item => {
    if (name === routes.SIGNAL) {
      return setParams({ pair: item });
    }

    return navigate(routes.SIGNAL, { pair: item });
  };

  const renderItem = ({ item }) => (
    <ItemWrapper onPress={() => handleParams(item)}>
      <ItemText>{item}</ItemText>
    </ItemWrapper>
  );

  return (
    <Container>
      <PairText>{title}</PairText>
      <PairDescription>{description}</PairDescription>

      {!!items && (
        <List
          data={items}
          ItemSeparatorComponent={Separator}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}

export default Pair;
