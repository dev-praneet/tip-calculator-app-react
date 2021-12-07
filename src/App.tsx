import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';


import { GlobalStyle } from './GlobalStyles';
import Theme from './Theme';

import InputField from './components/InputField';
import Caption from './components/Caption';
import TaxRates from './components/TaxRates';
import Dummy from './components/Dummy';
import DisplayTab from './components/DisplayTab';

import { ReactComponent as IconDollar} from './images/icon-dollar.svg'
import { ReactComponent as IconPerson} from './images/icon-person.svg'

const Wrapper = styled.div`
  padding: 2em;
`;

const InputBlock = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const DisplayBlock = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 2em;
  background-color: ${props => props.theme.color.veryDarkCyan};
  border-radius: 0.8rem;
`;

const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
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
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect( () => {
    if (billAmount != '' && taxPercent != '' && personCount != '' && Number(personCount) != 0) {
      setTipPerPerson(Number(billAmount) * Number(taxPercent) / 100 / Number(personCount));
      setTotalPerPerson(Number(billAmount) * (1 + Number(taxPercent) / 100) / Number(personCount));
      console.log(tipPerPerson, totalPerPerson);
    } else {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    }
  }, [billAmount, taxPercent, personCount])

  const clickHandler = (event: React.MouseEvent) => {
    setBillAmount('');
    setTaxPercent('');
    setPersonCount('');
  }

  return (
    <Theme>
      <Wrapper>
        <GlobalStyle/>
        <InputBlock>
          <Caption caption='Bill' />
          <InputField state={billAmount} stateSetter={setBillAmount} personCount={personCount} testRegex={/[^0-9\.]/} alert={false}>
            <IconDollar className='svg-images' viewBox='0 0 11 17'/>
          </InputField>
          <Dummy height={{mobile: '2', desktop: '2'}}/>
          <Caption caption='Select Tip %' />
          <TaxRates taxPercent={taxPercent} setTaxPercent={setTaxPercent}/>
          <Dummy height={{mobile: '2', desktop: '2'}}/>
          <Caption caption='Number of People' />
          <InputField state={personCount} stateSetter={setPersonCount} personCount={personCount} testRegex={/[^0-9]/} alert={true}>
            <IconPerson className='svg-images' viewBox='0 0 13 16'/>
          </InputField>
        </InputBlock>
          <Dummy height={{mobile: '2', desktop: '2'}}/>
        <DisplayBlock>
            <DisplayTab tag='Tip Amount' amount={tipPerPerson}/>
            <Dummy height={{mobile: '2', desktop: '2'}}/>
            <DisplayTab tag='Total' amount={totalPerPerson}/>
            <Dummy height={{mobile: '2', desktop: '2'}}/>
            <Reset onClick={clickHandler}>RESET</Reset>
        </DisplayBlock>
      </Wrapper>
    </Theme>
  );
}

export default App;
