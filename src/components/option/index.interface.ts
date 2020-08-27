export interface IOption {
    handles: {
        handleDelete?: () => void;
        handleEdit?: () => void;
    }
    label: {
        edit: string;
        remove: string;
    }
}