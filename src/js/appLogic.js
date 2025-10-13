// imports
import Todo from './task.js';
import Project from './project.js';

class MainApp {

    constructor() {
        this.projects = [];
    };

    addProject(projectName){
        const newProject = new Project(projectName);
        this.projects.push(newProject);
    };

    getProject(projectName){
        return this.projects.find(project => project.name === projectName);
    }

    addTodoToProject(projectName, title, description, dueDate, priority){
        const project = this.getProject(projectName);
        if (project) {
            const newTodo = new Todo(title,description,dueDate,priority);
            project.addTodo(newTodo);
        }
    }

}

const app = new MainApp();
app.addProject('Default Project');

// export 
export default app;