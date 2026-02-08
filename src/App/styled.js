import styled from "styled-components";

export const AppContainer = styled.div`
  flex-basis: 700px;
  margin: 20px;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 30px black;
  position: relative;
`;


export const InnerContainer = styled.div`
  position: relative;
  padding: 20px;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 24px;
  bottom: 12px;
  font-size: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;