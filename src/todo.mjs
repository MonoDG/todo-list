import { format } from 'date-fns'

export default class Todo {
    #_title;
    #_description;
    #_dueDate;
    #_priority;
    #_createdDate;
    #_lastUpdatedDate;

    constructor(title, description, dueDate, priority) {
        this.#_title = title;
        this.#_description = description;
        this.#_dueDate = dueDate;
        this.#_priority = priority;

        this.#_createdDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        this.#_lastUpdatedDate = this.#_createdDate;
    }

    get title() { return this.#_title; };
    get description() { return this.#_description; }
    get dueDate() { return this.#_dueDate; }
    get priority() { return this.#_priority; }
    get createdDate() { return this.#_createdDate; }
    get lastUpdatedDate() { return this.#_lastUpdatedDate }

    set title(value) { this.#_title = value; }
    set description(value) { this.#_description = value; }
    set dueDate(value) { this.#_dueDate = value; }
    set priority(value) { this.#_priority = value; }
    set lastUpdatedDate(value) { this.#_lastUpdatedDate = value; }

    toString() {
        return (`Title: ${this.#_title}` +
            `\nDescription: ${this.#_description}` +
            `\nDue Date: ${this.#_dueDate}` +
            `\nPriority: ${this.#_priority}` +
            `\nCreated Date: ${this.#_createdDate}` +
            `\nLast Updated Date: ${this.#_lastUpdatedDate}`
        )
    }
}