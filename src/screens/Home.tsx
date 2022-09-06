import React, { useContext, useEffect } from 'react';
import { Layout, Pair } from '../components';
import { MainSignalContext } from '../context/mainSignal';

function Home() {
  const { handleGetMainSignal, mainSignal } = useContext(MainSignalContext);

  useEffect(() => {
    handleGetMainSignal();
  }, []);

  return (
    <Layout>
      <Pair
        name="BTCUSDT"
        signal={mainSignal?.signal.BTCUSDT}
        price={mainSignal?.coinsData[0].currentPrice}
        dayChange={mainSignal?.coinsData[0].previousDayChange}
        monthChange={mainSignal?.coinsData[0].previousMonthChange}
        intervalChange={mainSignal?.coinsData[0].intervalChange}
      />
    </Layout>
  );
}

export default Home;
