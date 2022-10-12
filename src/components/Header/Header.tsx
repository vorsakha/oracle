import React, { useContext } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { HeaderContainer } from './styles';
import Button from '../common/Button';
import { CustomThemeContext } from '../../context/theme';
import { Theme } from '../../styles/theme';

import Sun from '../../assets/images/sunny-outline.svg';
import Moon from '../../assets/images/moon-outline.svg';
import BookmarkOutline from '../../assets/images/bookmark-outline.svg';
import Bookmark from '../../assets/images/bookmark.svg';
import { ParamList } from '../../routes';
import { FavoritesContext } from '../../context/favorites';
import { routes } from '../../constants';

export default function Navigation() {
  const { currentTheme, toggleTheme } = useContext(CustomThemeContext);
  const { handleSaveFavorite, favorites } = useContext(FavoritesContext);

  const { name } = useRoute();

  const { params } = useRoute<RouteProp<ParamList, routes.SIGNAL>>();

  return (
    <HeaderContainer>
      <View>
        {name === routes.SIGNAL && (
          <Button
            onPress={() => handleSaveFavorite(params.pair)}
            icon={favorites?.includes(params.pair) ? Bookmark : BookmarkOutline}
            active
            size="small"
            testID="favorite-btn"
          />
        )}
      </View>

      <View style={{ marginLeft: 'auto' }}>
        <Button
          onPress={toggleTheme}
          icon={currentTheme === Theme.light ? Moon : Sun}
          active
          size="small"
        />
      </View>
    </HeaderContainer>
  );
}
