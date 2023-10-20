export default class Project {
    #_name;
    #_todolist;
    #_createdDate;
    #_lastUpdatedDate;

    constructor(name) {
        this.#_name = name;
        this.#_todolist = new Array();
        this.#_createdDate = new Date();
        this.#_lastUpdatedDate = this.#_createdDate;
    }

    get name() { return this.#_name; };
    get todolist() { return this.#_todolist; };
    get createdDate() { return this.#_createdDate; };
    get lastUpdatedDate() { return this.#_lastUpdatedDate; };

    set name(value) { this.#_name = value; };
    set todolist(value) { this.#_todolist = value; };

    addTodo(todo) {
        this.#_todolist.push(todo);
    }

    addTodos(todos) {
        this.#_todolist = this.#_todolist.concat(todos);
    }

    removeTodo(id) {
        let indexToRemove = this.#_todolist.findIndex(todo => todo.id === id);
        if (indexToRemove !== -1) { this.#_todolist.splice(indexToRemove, 1); };
    }

    printTodos() {
        let todosOutput = "";
        this.#_todolist.forEach(todo => todosOutput += todo.toString() + "\n\n");
        console.log(todosOutput);
    }
}