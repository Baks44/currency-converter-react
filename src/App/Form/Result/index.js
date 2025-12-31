import { StyledResult } from "./styled";

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <StyledResult>
      {result.sourceAmount} PLN =&gt; {result.targetAmount.toFixed(2)} {result.currency}
    </StyledResult>
  );
};

export default Result;