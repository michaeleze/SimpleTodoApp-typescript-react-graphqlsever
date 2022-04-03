export interface IListOptions {
  handleDeleteTask: (id: string, text: string) => void;
  handleOpenModal(id: string): void;
  text: string;
  id: string;
}
