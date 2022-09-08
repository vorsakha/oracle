import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { Layout, Pair } from '../components';
import { SignalContext } from '../context/signal';
import { ParamList, routes } from '../routes';

function SignalScreen() {
  const {
    params: { pair },
  } = useRoute<RouteProp<ParamList, routes.SIGNAL>>();

  const { handleGetSignal, signal } = useContext(SignalContext);

  useEffect(() => {
    handleGetSignal(pair);
  }, []);

  return (
    <Layout>
      {!!signal && (
        <Pair
          name={signal.coin}
          intervalsData={signal.intervalsData}
          price={signal.currentPrice}
          dayChange={signal.previousDayChange}
          monthChange={signal.previousMonthChange}
        />
      )}
    </Layout>
  );
}

export default SignalScreen;
