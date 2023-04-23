// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {
  id;

  title;

  complete;

  constructor({ title, completed }) {
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}
