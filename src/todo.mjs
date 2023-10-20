import { format } from 'date-fns'
import { DEFAULT_DATE_FORMAT } from './constants.mjs';

export default class Todo {
    #_id;
    #_title;
    #_description;
    #_dueDate;
    #_priority;
    #_createdDate;
    #_lastUpdatedDate;

    constructor(title, description, dueDate = new Date(), priority = 1) {
        this.#_id = crypto.randomUUID();
        this.#_title = title;
        this.#_description = description;
        this.#_dueDate = dueDate;
        this.#_priority = priority;

        this.#_createdDate = new Date();
        this.#_lastUpdatedDate = this.#_createdDate;
    }

    get id() { return this.#_id; };
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
        return (
            `Id: ${this.#_id}` +
            `\nTitle: ${this.#_title}` +
            `\nDescription: ${this.#_description}` +
            `\nDue Date: ${format(this.#_dueDate, DEFAULT_DATE_FORMAT)}` +
            `\nPriority: ${this.#_priority}` +
            `\nCreated Date: ${format(this.#_createdDate, DEFAULT_DATE_FORMAT)}` +
            `\nLast Updated Date: ${format(this.#_lastUpdatedDate, DEFAULT_DATE_FORMAT)}`
        )
    }
}