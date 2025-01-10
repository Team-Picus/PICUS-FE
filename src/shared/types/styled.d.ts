import 'styled-components';

declare module 'styled-components' {
    import { ColorsTypes, FontsTypes } from '../config/theme';

    export interface DefaultTheme {
        colors: ColorsTypes;
        fonts: FontsTypes;
    }
}