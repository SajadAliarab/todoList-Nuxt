export class Todo {
    constructor(
        public id:number ,public title: string, public description: string, public status:StatusTodo){}
}
export enum StatusTodo{
    PENDING='Pending',
    COMPLETED = 'Compelted'
}