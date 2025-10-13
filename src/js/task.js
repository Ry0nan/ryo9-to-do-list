// define TODO class
class Todo {
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        // track if the task is complete
        this.isComplete = false;
    }
}

export default Todo;