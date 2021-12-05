import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-gap: 5px;
        
    > * {
        border-radius: 5px;
        }
`;
        
const Span = styled.span`
    background-color: ${props => props.theme.color.veryDarkCyan};
    color: ${props => props.theme.color.white};
    display: grid;
    justify-content: center;
    align-items: center;
    height: 2rem;
    transition-property: background-color, color;
    transition-duration: 200ms;
    
    &:hover {
        background-color: ${props => props.theme.color.lightGrayishCyan1};
        color: unset;
`;

const Custom = styled.input`
    padding: 0 0.4em;
    border: unset;
    outline: unset;
    direction: rtl;

    &:focus {
        border: 2px solid ${props => props.theme.color.lightGrayishCyan1};
    }

    &::placeholder {
        text-align: center;
        font-family: 'Space Mono', monospace;
        font-size: 1.0rem;
        font-weight: 700;
    }

    &:focus::placeholder {
        color: white;
    }
`;

const TaxRates: React.FC = () => {

    const [customTax, setCustomTax] = useState('');

    function taxHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setCustomTax(event.target.value)
    }

    return (
        <Container>
            <Span>5%</Span>
            <Span>10%</Span>
            <Span>15%</Span>
            <Span>25%</Span>
            <Span>50%</Span>
            <Custom type='text' value={customTax} onChange={taxHandler} placeholder='Custom'></Custom>
        </Container>
    )
}

export default TaxRates;