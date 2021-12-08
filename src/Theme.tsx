import { ThemeProvider } from 'styled-components';

const theme = {
color: {
    white: 'hsl(0, 0%, 100%)',
    veryLightCyan: 'hsl(185, 41%, 84%)',
    lightCyan: 'hsl(171, 67%, 46%)',
    dullCyan: 'hsl(185, 24%, 50%)',
    veryDarkCyan: 'hsl(183, 100%, 15%)',
    textColor: 'hsl(174, 19%, 34%)',
    hoveredText: 'hsl(182, 100%, 14%)',
    inputBackground: 'hsl(202, 50%, 97%)',
    hoveredInputBackground: 'hsl(173, 61%, 77%)',
},
breakpoint: {
mobile: '850px',
},
};

const Theme: React.FC = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;