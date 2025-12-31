import { useState } from 'react';
import Form from "./Form";
import { currencies } from './currencies';
import { AppContainer } from "./styled";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;
    setResult({
      sourceAmount: + amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <AppContainer>
      <Form result={result} calculateResult={calculateResult} />
    </AppContainer>
  );
}
export default App;

