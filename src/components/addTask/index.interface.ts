export interface IAddTask{
    handleCreateNewTask?() : void;
    handleChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}
