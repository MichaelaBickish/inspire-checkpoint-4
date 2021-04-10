export default class Todo {
    constructor({id, description, completed = false}) {
        this.id = id
        this.description = description
        this.completed = completed
    }

    get Template() {

        return /*html*/`
        <div class="col-12"><input type="checkbox" aria-label="Task Checkbox" class="mr-2" 
        id="single-task" onclick="app.todosController.checkedTask('${this.id}')" 
        ${this.completed ? 'checked' : ''}> ${this.description} <i class="fas fa-times ml-3 text-danger" 
        title='delete' onclick="app.todosController.deleteTodo('${this.id}')"></i></div>
        `
    }



}