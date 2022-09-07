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
      {!!mainSignal && (
        <Pair
          name={mainSignal[0].coin}
          intervalsData={mainSignal[0].intervalsData}
          price={mainSignal[0].currentPrice}
          dayChange={mainSignal[0].previousDayChange}
          monthChange={mainSignal[0].previousMonthChange}
        />
      )}
    </Layout>
  );
}

export default Home;
