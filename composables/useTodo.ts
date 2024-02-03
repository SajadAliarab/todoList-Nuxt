import type { CreateTodo } from "~/classes/CreateTodoCommand";
import { StatusTodo, Todo } from "~/classes/Todo";

export const useTodo =()=>{
    const todos:Ref<Todo[]>=ref([])
    const addTodo=(todo:CreateTodo)=>{
        const id = Math.floor(Math.random()*1000);
        todos.value.push(new Todo(id,todo.title,todo.description,StatusTodo.PENDING))
    }
    const deleteTodo = (id:number)=>{
        let todo = todos.value.find((item)=>item.id===id)
        if(todo){
            todos.value=todos.value.filter((item)=>item.id!==id);
        }
    }
    const toggleTodo = (id:number)=>{
        todos.value.map((item)=>{
            if(item.id===id && item.status==StatusTodo.PENDING){
                item.status=StatusTodo.COMPLETED;
            }else if(item.id===id && item.status==StatusTodo.COMPLETED){
                item.status=StatusTodo.PENDING;
            }
        })
    }
    return {todos,addTodo,deleteTodo,toggleTodo};
}