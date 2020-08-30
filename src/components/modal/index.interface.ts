export interface IModal{
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleCloseModal(): void;
    handleUpdateTask(id: string): void;
    item: {id?: string; text?: string};
    modal: boolean;
}