export default class Todo {
    #_title;
    #_description;
    #_dueDate;
    #_priority;

    constructor(title, description, dueDate, priority) {
        this.#_title = title;
        this.#_description = description;
        this.#_dueDate = dueDate;
        this.#_priority = priority;
    }

    get title() { return this.#_title; };
    get description() { return this.#_description; }
    get dueDate() { return this.#_dueDate; }
    get priority() { return this.#_priority; }

    set title(value) { this.#_title = value; }
    set description(value) { this.#_description = value; }
    set dueDate(value) { this.#_dueDate = value; }
    set priority(value) { this.#_priority = value; }

    toString() {
        return (`Title: ${this.#_title}` +
            `\nDescription: ${this.#_description}` +
            `\nDue Date: ${this.#_dueDate}` +
            `\nPriority: ${this.#_priority}`
        )
    }
}