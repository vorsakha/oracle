import React, { useContext, useEffect } from 'react';
import { Layout, PairList } from '../components';
import { FavoritesContext } from '../context/favorites';

function Favorites() {
  const { handleGetFavorites, favorites } = useContext(FavoritesContext);

  useEffect(() => {
    handleGetFavorites();
  }, []);

  return (
    <Layout>
      <PairList
        items={favorites}
        title="Favorites"
        description="My favorite pairs"
      />
    </Layout>
  );
}

export default Favorites;
