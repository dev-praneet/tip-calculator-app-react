import { ThemeProvider } from 'styled-components';

const theme = {
color: {
veryDarkCyan: 'hsl(183, 100%, 15%)',
darkGrayishCyan1: 'hsl(186, 14%, 43%)',
darkGrayishCyan2: 'hsl(184, 14%, 56%)',
lightGrayishCyan1: 'hsl(185, 41%, 64%)',
lightGrayishCyan2: 'hsl(189, 41%, 97%)',
white: 'hsl(0, 0%, 100%)'
},
breakpoint: {
mobile: '850px',
},
};

const Theme: React.FC = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;