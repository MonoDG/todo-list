import { format } from 'date-fns'
import { DEFAULT_DATE_FORMAT, TODO_STATE } from './constants.mjs';

export default class Todo {
    #_id;
    #_title;
    #_description;
    #_dueDate;
    #_priority;
    #_state;
    #_createdDate;
    #_lastUpdatedDate;

    constructor(title, description, dueDate, priority) {
        this.#_id = crypto.randomUUID();
        this.#_title = title;
        this.#_description = description;
        this.#_dueDate = dueDate;
        this.#_priority = priority;
        this.#_state = TODO_STATE.TODO;
        this.#_createdDate = new Date();
        this.#_lastUpdatedDate = this.#_createdDate;
    }

    get id() { return this.#_id; }
    get title() { return this.#_title; }
    get description() { return this.#_description; }
    get dueDate() { return this.#_dueDate; }
    get priority() { return this.#_priority; }
    get state() { return this.#_state; }
    get createdDate() { return this.#_createdDate; }
    get lastUpdatedDate() { return this.#_lastUpdatedDate }

    set title(value) { this.#_title = value; }
    set description(value) { this.#_description = value; }
    set dueDate(value) { this.#_dueDate = value; }
    set priority(value) { this.#_priority = value; }
    set state(value) { this.#_state = value; }
    set lastUpdatedDate(value) { this.#_lastUpdatedDate = value; }

    toString() {
        return (
            `Id: ${this.#_id}` +
            `\nTitle: ${this.#_title}` +
            `\nDescription: ${this.#_description}` +
            `\nDue Date: ${format(this.#_dueDate, DEFAULT_DATE_FORMAT)}` +
            `\nPriority: ${this.#_priority}` +
            `\nState: ${this.#_state}` +
            `\nCreated Date: ${format(this.#_createdDate, DEFAULT_DATE_FORMAT)}` +
            `\nLast Updated Date: ${format(this.#_lastUpdatedDate, DEFAULT_DATE_FORMAT)}`
        )
    }
}