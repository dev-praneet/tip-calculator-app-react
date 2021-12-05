import styled from "styled-components";

const Container = styled.div<Props>`
    height: ${props => props.height.mobile + 'em'};

    @media(min-width: ${props => props.theme.breakpoint.mobile}) {
        height: ${props => props.height.desktop + 'em'};
    }
`;

type Props = {
    height: {
        mobile: string;
        desktop: string;
    }
}

const Dummy: React.FC<Props> = props => {
    return (
        <Container height={props.height}/>
    )
}

export default Dummy;