import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


//Private
function _draw() {
  let todos = ProxyState.todos;
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById("single-task").innerHTML = template

    if (todos.length == 0) {
    document.getElementById('single-task').innerHTML = 
    '<div class="col text-center"><p><em>no todos to display</em><p></div>'
    }
    let todoTotal = ProxyState.todos.length 
    let todosLeft = ProxyState.todos.filter(t => t.completed == false).length
    
    document.getElementById('tasks-left').innerHTML = `<p class="mb-0">${todosLeft} left | ${todoTotal} total</p>`

//   console.log('hello from controller')
}



//Public
export default class TodosController {
  constructor() {
    ProxyState.on("todos", _draw);

    this.getMyTodos()
  }

async getMyTodos(){
    try {
        await todosService.getMyTodos()
    } catch (error) {
        
    }
}

addTodo(e) {
      try {
        e.preventDefault()
        let form = window.event.target
        let rawTodo = {
            description: form['addTodo'].value
        }
      todosService.addTodo(rawTodo) 
      form.reset()   
      } catch (error) {
          console.error(error)
      }
}

async deleteTodo(id){
    try {
        await todosService.deleteTodo(id)
    } catch (error) {
        console.error(error)
    }
}

checkedTask(id) {
        try {
            todosService.checkedTask(id)
        } catch (error) {
            
        }
      }
    
  

}