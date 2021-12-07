import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-gap: 5px;
        
    > * {
        border-radius: 5px;
        }
`;
        
const SpanContainer = styled.span`
    background-color: ${props => props.theme.color.veryDarkCyan};
    color: ${props => props.theme.color.white};
    display: grid;
    justify-content: center;
    align-items: center;
    height: 2rem;
    transition-property: background-color, color;
    transition-duration: 200ms;
    
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.color.lightCyan};
        color: ${props => props.theme.color.hoveredText};
`;

const Custom = styled.input<{stringOkay: Boolean;}>`
    padding: 0 0.4em;
    border: unset;
    outline: unset;
    direction: rtl;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: ${props => props.theme.color.veryDarkCyan};
    background-color: ${props => props.theme.color.inputBackground};

    &:focus {
        outline: 2px solid ${props => props.theme.color.lightCyan};
    }

    &::placeholder {
        text-align: center;
        font-family: 'Space Mono', monospace;
        font-size: 1.0rem;
        font-weight: 700;
        color: ${props => props.theme.color.textColor};
        opacity: 0.7;
    }

    &:focus::placeholder {

    }

    ${
        props => !props.stringOkay && css`
        animation: redBorder 500ms ease-in-out;
        `
    }
`;

const Span: React.FC<{tax: string}> = props => {

    return (
        <SpanContainer data-tax={props.tax}>
            {props.tax + '%'} 
        </SpanContainer>
    )
}

const TaxRates: React.FC<{taxPercent: string, setTaxPercent: React.Dispatch<React.SetStateAction<string>>}> = (props) => {

    const [stringOkay, setStringOkay] = useState<Boolean>(true);
    const testRegex = /[^0-9\.]/;

    function taxHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (!testRegex.test(event.target.value)) {
            props.setTaxPercent(event.target.value)
        } else {
            setStringOkay(false);
            setTimeout(() => {setStringOkay(true)}, 500);
        }
    }

    // if I change the type to 'React.MouseEvent' then event.target.innerText throws error. Look up the correct type for this.
    const clickHandler = (event: any)  => {
        if (event.target.dataset.tax) {
            props.setTaxPercent(event.target.dataset.tax)
        }
    }

    return (
        <Container onClick={clickHandler}>
            <Span tax='5'/>
            <Span tax='10'/>
            <Span tax='15'/>
            <Span tax='25'/>
            <Span tax='50'/>
            <Custom type='text' value={props.taxPercent} onChange={taxHandler} placeholder='Custom' stringOkay={stringOkay}></Custom>
        </Container>
    )
}

export default TaxRates;