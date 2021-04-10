import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { sandBoxApi } from "./AxiosService.js";

class TodosService {


    async getMyTodos(){
        let res = await sandBoxApi.get('mickbick/todos')
        
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos)
    }

    async addTodo(newTodo){
        let res = await sandBoxApi.post('mickbick/todos', newTodo)
        console.log(res)

        let todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
        
    }

    async deleteTodo(id){
        ProxyState.todos = ProxyState.todos.filter(t=> t.id !== id) 
        await sandBoxApi.delete('mickbick/todos/' + id)
        
    }
    
    async checkedTask(id){
        let checkedTodo = ProxyState.todos.find(t => t.id === id)
        if(checkedTodo.completed){
            await sandBoxApi.put('mickbick/todos/' + id, {completed:false})
            checkedTodo.completed = false
        }else{
            await sandBoxApi.put('mickbick/todos/' + id, {completed:true})
            checkedTodo.completed = true
        }
        //trigger listener
        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService();