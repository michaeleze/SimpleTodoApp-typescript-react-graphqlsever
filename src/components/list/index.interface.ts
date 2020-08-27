import {IOption} from "../option/index.interface";

export interface IList {
    list: {id: number, text: string};
    options: IOption
}