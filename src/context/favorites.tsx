import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { createContext, PropsWithChildren, useState } from 'react';

interface FavoritesContextProps {
  handleGetFavorites: () => Promise<void>;
  handleSaveFavorite: (newFavorite: string) => void;
  favorites: string[] | null;
  favoritesLoading: boolean;
}

export const FavoritesContext = createContext<FavoritesContextProps>(
  {} as FavoritesContextProps,
);

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] =
    useState<FavoritesContextProps['favorites']>(null);
  const [favoritesLoading, setLoading] = useState(false);

  const { getItem, setItem } = useAsyncStorage('@favorites');

  const handleGetFavorites = async () => {
    setLoading(true);
    const cachedFavorites = await getItem();

    if (cachedFavorites) setFavorites(JSON.parse(cachedFavorites));
    setLoading(false);
  };

  const handleSaveFavorite = (newFavorite: string) => {
    const newData =
      favorites === null ? [newFavorite] : [...favorites, newFavorite];

    setItem(JSON.stringify(newData));
    setFavorites(newData);
  };

  return (
    <FavoritesContext.Provider
      value={{
        handleGetFavorites,
        handleSaveFavorite,
        favorites,
        favoritesLoading,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
