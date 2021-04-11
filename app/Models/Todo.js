export default class Todo {
    constructor({id, description, completed = false}) {
        this.id = id
        this.description = description
        this.completed = completed
    }

    get Template() {

        return /*html*/`
        <div class="col-12 text-light"><input type="checkbox" aria-label="Task Checkbox" class="mr-2" 
        id="single-task" onclick="app.todosController.checkedTask('${this.id}')" title="check to complete"
        ${this.completed ? 'checked' : ''}> ${this.description} <i class="fas fa-times ml-3 text-warning" 
        title='delete' onclick="app.todosController.deleteTodo('${this.id}')"></i></div>
        `
    }



}