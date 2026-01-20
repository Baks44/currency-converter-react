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

    const calculateResult = (currency, amount) => {
      if (ratesData.state !== "success") return;

      const rate = Number(ratesData.rates[currency]);

      console.log("RATE:", rate, typeof rate);
      console.log("AMOUNT:", amount, typeof amount);

      if (isNaN(rate)) {
        console.error("Nieprawidłowy kurs dla:", currency);
        return;
      }

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
