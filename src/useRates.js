import { useEffect, useState } from 'react';

export function useRates() {
  const [ratesData, setRatesData] = useState({
    state: 'loading'
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&base_currency=PLN`
        );

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        setRatesData({
          await: new Promise((resolve) => setTimeout(resolve, 1000)),
          state: 'success',
          rates: data.data
        });
      } catch {
        setRatesData({
          state: 'error'
        });
      }
    };

    getRates();
  }, []);

  return ratesData;
}
