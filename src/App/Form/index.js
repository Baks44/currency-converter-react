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
        calculateResult(currency, Number(amount));
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
                                onChange={({ target }) => setAmount(target.value)}
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
                                onChange={({ target }) => {
                                    console.log("SELECTED CURRENCY:", target.value);
                                    setCurrency(target.value);
                                }}
                            >
                            {Object.keys(ratesData.rates).map(code => (
                                <option key={code} value={code}>
                                    {code}
                                </option>
                            ))}
                        </Field>


                    </Legend>
                <Button>Przelicz!</Button>
                <FormInfo>
                    Kursy pochodzą z Narodowego Banku Polskiego.
                </FormInfo>
                <Result result={result} />
            </>
                )}
        </StyledForm>
        </FormContainer >
    );
};

export default Form;
