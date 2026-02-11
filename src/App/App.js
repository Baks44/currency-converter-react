import { GlobalStyle } from '../GlobalStyles';
import { AppContainer, InnerContainer, Footer } from './styled';
import { useRates } from '../useRates';
import Form from '../Form';

function App() {
  const ratesData = useRates();

  return (
    <AppContainer>
      <GlobalStyle />

      <InnerContainer>
        <Form ratesData={ratesData} />
      </InnerContainer>
      <Footer>©2026 Bugs. All rights reserved</Footer>
    </AppContainer>
  );
}

export default App;
