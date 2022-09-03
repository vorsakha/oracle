import React, { useContext, useEffect } from 'react';
import { Layout, Pair } from '../components';
import { MainSignalContext } from '../context/mainSignal';

function Home() {
  const { handleGetMainSignal, mainSignal } = useContext(MainSignalContext);

  useEffect(() => {
    handleGetMainSignal();
  }, []);

  useEffect(() => {
    // console.log(mainSignal);
  }, [mainSignal]);

  return (
    <Layout>
      <Pair
        name="BTCUSDT"
        signal={mainSignal?.signal}
        price={mainSignal?.coinsData[0].currentPrice}
        dayChange={mainSignal?.coinsData[0].previousDayChange}
        monthChange={mainSignal?.coinsData[0].previousMonthChange}
      />
    </Layout>
  );
}

export default Home;
