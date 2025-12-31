import { useState } from "react";
import "./App.css";
import Form from "./Form/Result";
import { currencies } from "./currencies";
import { GlobalStyle } from "../GlobalStyle";
import { AppContainer, InnerContainer } from "./styled";


function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <InnerContainer>
          <Form result={result} calculateResult={calculateResult} />
          <footer>©2023 Bugs. All rights reserved</footer>
        </InnerContainer>
      </AppContainer>
    </>
  );
}

      export default App;