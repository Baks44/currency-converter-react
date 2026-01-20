import { useState } from "react";
import Form from "./Form";
import { GlobalStyle } from "../GlobalStyles";
import { AppContainer, InnerContainer } from "./styled";
import { useRates } from "../useRates";

function App() {
  const [result, setResult] = useState();
  const ratesData = useRates();

  const calculateResult = (currency, amount) => {
    if (ratesData.state !== "success") return;

    const rateObject = ratesData?.rates?.[currency];
    console.log("FOUND RATE OBJECT:", rateObject);

    if (!rateObject) {
      console.error("BRAK KURSU DLA:", currency);
      return;
    }

    const rate = Number(rateObject.value);
    console.log("RATE VALUE:", rate);

    setResult({
      sourceAmount: Number(amount),
      targetAmount: Number(amount) * rate,
      currency,
    });
  };

  return (
    <AppContainer>
      <GlobalStyle />

      <InnerContainer>
        <Form
          result={result}
          calculateResult={calculateResult}
          ratesData={ratesData}
        />
        <footer>©2023 Bugs. All rights reserved</footer>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
