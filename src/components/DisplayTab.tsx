import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    > * {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }

    > :nth-child(1) {
        > :nth-child(1) {
            color: ${props => props.theme.color.white};
            font-size: 0.7rem;
        }
        > :nth-child(2) {
            color: ${props => props.theme.color.dullCyan};
            font-size: 0.7rem;
        }
    }

    > :nth-child(2) {
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.color.lightCyan};
    }
`;

type Props = {
    tag: string;
    amount: number;
}

const DisplayTab: React.FC<Props> = props => {
    return (
        <Container>
            <div className='flex-column'>
                <span>{props.tag}</span>
                <span>/ person</span>
            </div>
            <div>${props.amount.toFixed(2)}</div>
        </Container>
    )
}

export default DisplayTab;