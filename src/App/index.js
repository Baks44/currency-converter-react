import { useState } from 'react';
import Form from './Form';
import { AppContainer } from './styled';
import { useRates } from '../useRates';

function App() {
  const [result, setResult] = useState();
  const ratesData = useRates();
  const calculateResult = (currency, amount) => {
    if (ratesData.state !== 'success') return;

    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency
    });
  };

  return (
    <AppContainer>
      <Form
        result={result}
        calculateResult={calculateResult}
        ratesData={ratesData}
      />
    </AppContainer>
  );
}

export default App;
