import { useState } from "react";
import Form from "./Form";
import { GlobalStyle } from "../GlobalStyles";
import { AppContainer, InnerContainer, Footer} from "./styled";
import { useRates } from "../useRates";

function App() {
  const [result, setResult] = useState();
  const ratesData = useRates();

  const calculateResult = (currency, amount) => {
    if (ratesData.state !== "success") return;

    const numericAmount = parseFloat(amount);
    const rate = ratesData.rates[currency]?.value;

    console.log("DEBUG:", {
      currency,
      numericAmount,
      rate,
    });

    if (isNaN(numericAmount) || typeof rate !== "number") {
      console.error("BŁĘDNE DANE", { numericAmount, rate });
      setResult(null);
      return;
    }

    if (!Number.isFinite(numericAmount) || !Number.isFinite(rate)) {
      setResult(null);
      return;
    }

    if (typeof rate !== "number") {
      setResult(null);
      return;
    }

    setResult({
      sourceAmount: numericAmount,
      targetAmount: numericAmount * rate,
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
      </InnerContainer>
      <Footer>©2026 Bugs. All rights reserved</Footer>
    </AppContainer>
  );
};

export default App;
