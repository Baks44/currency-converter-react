import { useState } from 'react';
import Result from './Result';
import Clock from '../Clock/Clock';

import {
  FormContainer,
  StyledForm,
  Legend,
  Header,
  LabelText,
  Field,
  Button,
  FormInfo,
  ApiError,
  ApiLoading
} from './styled';

const Form = ({ ratesData }) => {
  const [currency, setCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const calculateResult = (currency, amount) => {
    if (ratesData.state !== 'success') return;

    const numericAmount = parseFloat(amount);
    const rate = ratesData.rates[currency]?.value;

    if (isNaN(numericAmount) || typeof rate !== 'number') {
      console.error('BŁĘDNE DANE', { numericAmount, rate });
      setResult(null);
      return;
    }

    if (!Number.isFinite(numericAmount) || !Number.isFinite(rate)) {
      setResult(null);
      return;
    }

    setResult({
      sourceAmount: numericAmount,
      targetAmount: numericAmount * rate,
      currency
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, parseFloat(amount));
  };

  return (
    <FormContainer>
      <Clock />
      <StyledForm onSubmit={onSubmit}>
        <Header>Przelicznik walut</Header>
        {ratesData.state === 'loading' && (
          <ApiLoading>⌛ Ładowanie kursów walut…</ApiLoading>
        )}
        {ratesData.state === 'error' && (
          <ApiError>
            ❌ Nie udało się pobrać kursów. Sprawdź internet i spróbuj ponownie.
          </ApiError>
        )}
        {ratesData.state === 'success' && (
          <>
            <Legend>
              <LabelText>Kwota w zł*:</LabelText>

              <Field
                value={amount}
                onChange={({ target }) =>
                  setAmount(target.value.replace(',', '.'))
                }
                placeholder="Wpisz kwotę w zł"
                type="number"
                required
                step="0.01"
              />
            </Legend>
            <Legend>
              <LabelText>Waluta:</LabelText>
              <Field
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {ratesData.rates &&
                  Object.keys(ratesData.rates)
                    .filter((code) => code !== 'PLN')
                    .map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
              </Field>
            </Legend>
            <Button>Przelicz!</Button>
            <FormInfo>Kursy pochodzą z currencyapi.com.</FormInfo>
            <Result result={result} />
          </>
        )}
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
