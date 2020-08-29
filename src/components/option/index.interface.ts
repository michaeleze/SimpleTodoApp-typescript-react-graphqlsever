export interface IOption {
    handleDeleteTask: (id: string) => void;
    handleUpdateTask: (id: string) => void;
    id: string;
}