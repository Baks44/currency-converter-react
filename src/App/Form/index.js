import { useState } from "react";
import { currencies } from "../currencies.js";
import Result from "./Result";
import Clock from "../Clock/Clock";

import {
    FormContainer,
    StyledForm,
    Legend,
    Header,
    LabelText,
    Field,
    Button
} from "./styled";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (!amount) return;
        calculateResult(currency, Number(amount));
    };

    return (
        <FormContainer>
            <Clock />

            <StyledForm onSubmit={onSubmit}>
                <Header>Przelicznik walut</Header>

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
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map(currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </Field>
                </Legend>

                <Button>Przelicz!</Button>

                <p className="form__info">
                    Kursy mogą się różnić w zależności od aktualnej stawki.
                </p>

                <Result result={result} />
            </StyledForm>
        </FormContainer>
    );
};

export default Form;
