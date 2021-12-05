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

function App() {
  return (
    <Theme>
      <Wrapper>
        <GlobalStyle/>
        <InputBlock>
          <Caption caption='Bill' />
          <InputField>
            <IconDollar className='svg-images' viewBox='0 0 11 17'/>
          </InputField>
          <Dummy height={{mobile: '2', desktop: '2'}}/>
          <Caption caption='Select Tip %' />
          <TaxRates />
          <Dummy height={{mobile: '2', desktop: '2'}}/>
          <Caption caption='Number of People' />
          <InputField>
            <IconPerson className='svg-images' viewBox='0 0 13 16'/>
          </InputField>
        </InputBlock>
          <Dummy height={{mobile: '2', desktop: '2'}}/>
        <DisplayBlock>
            <DisplayTab tag='Tip Amount'/>
            <Dummy height={{mobile: '2', desktop: '2'}}/>
            <DisplayTab tag='Total'/>
        </DisplayBlock>
      </Wrapper>
    </Theme>
  );
}

export default App;
