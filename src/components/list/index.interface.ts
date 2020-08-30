import {IOption} from "../option/index.interface";

export interface IList {
    list: {
        id: string;
        text: string;
        handleChange(e: React.ChangeEvent<HTMLInputElement> | undefined): void;
    };
    options: IOption;
}