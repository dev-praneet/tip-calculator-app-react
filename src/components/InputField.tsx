import React, { useState, useRef } from "react";
import styled, {css} from "styled-components";

const Container = styled.div<{stringOkay: Boolean; personCount: string; alert: Boolean;}>`
    display: flex;
    position: relative;
    padding: 0 1em;
    background-color: ${props => props.theme.color.inputBackground};
    border-radius: 0.3em;

    &:focus-within {
        outline: 2px solid ${props => props.theme.color.lightCyan};
    }

    > :nth-child(2) {
        margin-left: 0.5em;
    }

    ${
        props => !props.stringOkay && css`
            animation: redBorder 500ms ease-in-out;
        `
    }

    @keyframes redBorder {
        50% {
            outline: 4px solid red;
        }
        100% {
            outline: 1px solid red;
        }
    }

    ${
        props => props.alert && props.personCount !== '' && Number(props.personCount) === 0 && css`
            &::before {
                content: "Can't be zero";
                position: absolute;
                color: red;
                top: -2em;
                right: -1em;        
        `
    }

    }

`;
    
const Input = styled.input`
    border: unset;
    direction: rtl;
    width: 100%;
    height: 2.5em;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    color: ${props => props.theme.color.veryDarkCyan};
    background-color: ${props => props.theme.color.inputBackground};
    font-size: 1rem;

    &:focus {
        outline: unset;
    }
`;

type Props = {
    state: string;
    stateSetter: React.Dispatch<React.SetStateAction<string>>;
    personCount: string;
    testRegex: RegExp;
    alert: Boolean;
}

const InputField: React.FC<Props> = (props) => {

    // find out the specific 'type' for inputRef in the following line
    const inputRef: any = useRef<HTMLDivElement>();
    const [stringOkay, setStringOkay] = useState<Boolean>(true);

    const dot = /\./g;
    function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const numberOfPeriods = event.target.value.match(dot)?.length || 0;
            if (props.testRegex.test(event.target.value) || numberOfPeriods > 1) {
                setStringOkay(false);
                setTimeout(() => {setStringOkay(true)}, 500);
            } else {

                props.stateSetter(event.target.value);
            }
        }

    function focus() {
        inputRef.current.focus();
    }

    return (
        <Container ref={inputRef} stringOkay={stringOkay} personCount={props.personCount} alert={props.alert}>
            {props.children}
            <Input placeholder='0' type='text' value={props.state} onClick={focus} onChange={inputHandler} />
        </Container>
    )
}

export default InputField;