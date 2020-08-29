import {IOption} from "../option/index.interface";

export interface IList {
    list: {
        id: string;
        enableEdit: boolean;
        text: string;
        handleEditTask(id: string): void;
    };
    options: IOption;
}