import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            veryDarkCyan: string,
            inputBackground: string,
            hoveredInputBackground: string,
            lightCyan: string,
            textColor: string,
            hoveredText: string,
            dullCyan: string,
            white: string
            },
        breakpoint: {
            mobile: string;
        }
    }
}