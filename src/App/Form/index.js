import { useState } from "react";
import Result from "./Result";
import Clock from "../Clock/Clock";

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
    ApiLoading,
} from "./styled";

const Form = ({ calculateResult, result, ratesData }) => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, parseFloat(amount));

    };

    return (
        <FormContainer>
            <Clock />
            <StyledForm onSubmit={onSubmit}>
                <Header>Przelicznik walut</Header>
                {ratesData.state === "loading" && (
                    <ApiLoading>⌛ Ładowanie kursów walut…
                    </ApiLoading>
                )}
                {ratesData.state === "error" && (
                    <ApiError>
                        ❌ Nie udało się pobrać kursów.
                        Sprawdź internet i spróbuj ponownie.
                    </ApiError>
                )}
                {ratesData.state === "success" && (
                    <>
                        <Legend>
                            <LabelText>Kwota w zł*:</LabelText>

                            <Field
                                value={amount}
                                onChange={({ target }) => setAmount(target.value.replace(",", "."))}
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
                                        .filter(code => code !== "PLN")
                                        .map(code => (
                                            <option key={code} value={code}>
                                                {code}
                                            </option>
                                        ))}
                            </Field>


                        </Legend>
                        <Button>Przelicz!</Button>
                        <FormInfo>
                            Kursy pochodzą z currencyapi.com.
                        </FormInfo>
                        <Result result={result} />
                    </>
                )}
            </StyledForm>
        </FormContainer >
    );
};

export default Form;
