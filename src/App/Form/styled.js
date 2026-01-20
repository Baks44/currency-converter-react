import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
`;

export const StyledForm = styled.form`
`;

export const Legend = styled.fieldset`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  margin: 10px 0;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.h1`
  color: rgba(0,127,165,.6);
  text-align: center;
`;

export const LabelText = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
`;

export const Field = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background: rgba(0,127,165,.6);
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

export const FormInfo = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: #555;
`;

export const ApiInfo = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;

export const ApiLoading = styled(ApiInfo)`
  color: teal;
`;

export const ApiError = styled(ApiInfo)`
  color: crimson;
  font-weight: bold;
`;