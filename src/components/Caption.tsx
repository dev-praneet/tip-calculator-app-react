import styled from "styled-components";

const Span = styled.div`
  margin-bottom: 0.5em;
  color: ${props => props.theme.color.textColor};
`;

type Props = {
  caption: string;
};

const Caption: React.FC<Props> = props => {
  return <Span>{props.caption}</Span>;
};

export default Caption;
