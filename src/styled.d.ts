import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            white: string,
            veryLightCyan: string,
            lightCyan: string,
            dullCyan: string,
            veryDarkCyan: string,
            textColor: string,
            hoveredText: string,
            inputBackground: string,
            hoveredInputBackground: string,
            },
        breakpoint: {
            mobile: string;
        }
    }
}