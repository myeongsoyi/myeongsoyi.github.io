import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    margin: 5px;
    border: 2px solid lightcoral;
    border-radius: 10px;
    background-color: lightblue;
    color: lightcoral;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    return <StyledButton onclick={onclick} > {title || "button"}</StyledButton>
}

export default Button;