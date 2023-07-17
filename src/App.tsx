import { useState } from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './GlobalStyles';
import Theme from './Theme';

import InputField from './components/InputField';
import Caption from './components/Caption';
import TaxRates from './components/TaxRates';
import Dummy from './components/Dummy';
import DisplayTab from './components/DisplayTab';

import { ReactComponent as IconDollar } from './images/icon-dollar.svg';
import { ReactComponent as IconPerson } from './images/icon-person.svg';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.veryLightCyan};

  @media (min-width: ${props => props.theme.breakpoint.mobile}) {
    min-width: max(${props => props.theme.breakpoint.mobile}, 100%);
  }
`;

const Container = styled.div`
  max-width: min(85%, 500px);
  margin: 0 auto;
  padding: 1.2em;
  border-radius: 1em;
  background-color: ${props => props.theme.color.white};

  @media (min-width: ${props => props.theme.breakpoint.mobile}) {
    display: flex;
    padding: 2.5em 1em;
    max-width: min(85%, 1000px);
    margin: auto;
  }
`;

const InputBlock = styled.div`
  max-width: 90%;
  margin: 0 auto;
  flex-basis: 45%;
`;

const DisplayBlock = styled.div`
  max-width: 90%;
  margin: 0 auto;
  flex-basis: 45%;
  padding: 2em;
  background-color: ${props => props.theme.color.veryDarkCyan};
  border-radius: 0.8rem;

  @media (min-width: ${props => props.theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Reset = styled.button`
  padding: 0.4em 0;
  width: 100%;
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.color.hoveredText};
  background-color: ${props => props.theme.color.lightCyan};
  outline: none;
  border: none;
  border-radius: 0.2em;
  transition-property: background-color;
  transition-duration: 200ms;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.color.hoveredInputBackground};
  }
`;

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [taxPercent, setTaxPercent] = useState('');
  const [personCount, setPersonCount] = useState('');

  function getTotalPerPerson() {
    if ([billAmount, taxPercent, personCount].every(data => data !== '') && +personCount !== 0) {
      return (Number(billAmount) * (1 + Number(taxPercent) / 100)) / Number(personCount);
    }

    return 0;
  }

  function getTipPerPerson() {
    if ([billAmount, taxPercent, personCount].every(data => data !== '') && +personCount !== 0) {
      return (Number(billAmount) * Number(taxPercent)) / 100 / Number(personCount);
    }

    return 0;
  }

  const resetClickHandler = (event: React.MouseEvent) => {
    setBillAmount('');
    setTaxPercent('');
    setPersonCount('');
  };

  return (
    <Theme>
      <Wrapper>
        <div style={{ height: '3em' }}></div>
        <Container>
          <GlobalStyle />
          <InputBlock>
            <Caption caption='Bill' />
            <InputField state={billAmount} stateSetter={setBillAmount} personCount={personCount} testRegex={/[^0-9.]/} alert={false}>
              <IconDollar className='svg-images' viewBox='0 0 11 17' />
            </InputField>
            <Dummy height={{ mobile: '2', desktop: '2' }} />
            <Caption caption='Select Tip %' />
            <TaxRates taxPercent={taxPercent} setTaxPercent={setTaxPercent} />
            <Dummy height={{ mobile: '2', desktop: '2' }} />
            <Caption caption='Number of People' />
            <InputField state={personCount} stateSetter={setPersonCount} personCount={personCount} testRegex={/[^0-9]/} alert={true}>
              <IconPerson className='svg-images' viewBox='0 0 13 16' />
            </InputField>
            <Dummy height={{ mobile: '2', desktop: '2' }} />
          </InputBlock>
          <DisplayBlock>
            <div>
              <DisplayTab tag='Tip Amount' amount={getTipPerPerson()} />
              <Dummy height={{ mobile: '2', desktop: '2' }} />
              <DisplayTab tag='Total' amount={getTotalPerPerson()} />
            </div>
            <Dummy height={{ mobile: '2', desktop: '2' }} />
            <Reset onClick={resetClickHandler}>RESET</Reset>
          </DisplayBlock>
        </Container>
        <div style={{ height: '3em' }}></div>
      </Wrapper>
    </Theme>
  );
}

export default App;
