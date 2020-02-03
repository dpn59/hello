import React from "react";
import styled from "@emotion/styled";
const Condition = ({ temp, condition }) => {
  const Condition = styled.h3`
    font-family: "merriweather";
    font-size: 1.2rem;
  `;
  const Temperature = styled.h1`
    font-family: "Fira Sans";
    font-size: 2rem;
    font-weight: 200;
  `;
  return (
    <>
      <Temperature>{temp}</Temperature>
      <Condition>{condition}</Condition>
    </>
  );
};

export default Condition;
