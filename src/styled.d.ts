import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            veryDarkCyan: string,
            darkGrayishCyan1: string,
            darkGrayishCyan2: string,
            lightGrayishCyan1: string,
            lightGrayishCyan2: string,
            white: string
            },
        breakpoint: {
            mobile: string;
        }
    }
}