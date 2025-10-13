import Todo from './task.js';

class Project {
    constructor(name){
        this.name = name;
        this.todos = [];
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    removeTodo(todoTitle){
        const indexToRemove = this.todos.findIndex(todo => todo.title === todoTitle);
        if (indexToRemove !== -1) {
            this.todos.splice(indexToRemove, 1);
        }
    }
}