import { Record } from './airtable-model';

export interface SplashButton {
    icon: string;
    index?: number;
    text: string;
    textSmall: string;
    link: string;
}

export interface HomePage {
    backgroundStyling: {
        'background-blend-mode': string;
        'background-color': string;
        'background-image': string;
        'background-repeat': string;
        'background-size': string;
    };
    button$?: Array<SplashButton>;
    division: string;
    searchDisplay: boolean | string;
    specialButton?: SplashButton;
    splashTitle$?: Array<Record> | string;
}
