export interface IListItem{
  handleDeleteTask: (id: string, text: string) => void;
  handleOpenModal(id: string): void;
  list?: [{
    id: string;
    text: string;
  }];
}
