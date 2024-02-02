export class Todo {
    constructor(
        public title: string, public description: string, public status:StatusTodo){}
}
export enum StatusTodo{
    PENDING,
    COMPLETED
}