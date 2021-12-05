import React, { SetStateAction, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 0 1em;
    background-color: ${props => props.theme.color.lightGrayishCyan2};
    border-radius: 0.3em;
    `;
    
    const Input = styled.input`
    border: unset;
    direction: rtl;
    width: 100%;
    height: 2.5em;
    background-color: ${props => props.theme.color.lightGrayishCyan2};
    font-size: 1rem;

    &:focus {
        outline: unset
    }
`;

const ImageEnclosure = styled.div`

`;

type Props = {

}

const InputField: React.FC<Props> = (props) => {
    const [totalBill, setTotalBill] = useState<string>('');
    
    function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setTotalBill(event.target.value);
    }

    return (
        <Container>
            {props.children}
            <Input placeholder='0' type='text' value={totalBill} onChange={inputHandler}/>
        </Container>
    )
}

export default InputField;