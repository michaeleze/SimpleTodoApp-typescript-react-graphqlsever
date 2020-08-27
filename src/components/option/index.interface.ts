export interface IOption {
    handles: {
        handleDelete: (id: number) => void;
        handleEdit: (id: number) => void;
    }
    id: number;
    label: {
        edit: string;
        remove: string;
    }
}