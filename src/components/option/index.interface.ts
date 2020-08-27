export interface IOption {
    handleDelete?: () => void;
    handleEdit?: () => void;
    label: {
        edit: string;
        delete: string;
    }
}