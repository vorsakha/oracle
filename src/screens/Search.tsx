import React, { useContext, useEffect } from 'react';
import { Layout, PairList } from '../components';
import { PairsContext } from '../context/pairs';

function Search() {
  const { pairs, handleGetPairs } = useContext(PairsContext);

  useEffect(() => {
    handleGetPairs();
  }, []);

  return <Layout>{!!pairs && <PairList items={pairs} />}</Layout>;
}

export default Search;
