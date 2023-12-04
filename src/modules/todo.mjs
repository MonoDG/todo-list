import { format } from 'date-fns'
import { DATE_FORMAT } from '../utils/constants.mjs';

export default class Todo {
    #_id;
    #_projectid;
    #_title;
    #_description;
    #_dueDate;
    #_priority;
    #_completed;
    #_createdDate;
    #_lastUpdatedDate;

    constructor(projectid, title, description, dueDate, priority) {
        this.#_id = crypto.randomUUID();
        this.#_projectid = projectid;
        this.#_title = title;
        this.#_description = description;
        this.#_dueDate = dueDate;
        this.#_priority = priority;
        this.completed = false;
        this.#_createdDate = new Date();
        this.#_lastUpdatedDate = this.#_createdDate;
    }

    get id() { return this.#_id; }
    get projectid() { return this.#_projectid; };
    get title() { return this.#_title; }
    get description() { return this.#_description; }
    get dueDate() { return this.#_dueDate; }
    get priority() { return this.#_priority; }
    get completed() { return this.#_completed; }
    get createdDate() { return this.#_createdDate; }
    get lastUpdatedDate() { return this.#_lastUpdatedDate }

    set projectid(value) { this.#_projectid = value; }
    set title(value) { this.#_title = value; }
    set description(value) { this.#_description = value; }
    set dueDate(value) { this.#_dueDate = value; }
    set priority(value) { this.#_priority = value; }
    set completed(value) { this.#_completed = value; }
    set lastUpdatedDate(value) { this.#_lastUpdatedDate = value; }

    toString() {
        return (
            `Id: ${this.#_id}` +
            `\nProject ID: ${this.#_projectid}` +
            `\nTitle: ${this.#_title}` +
            `\nDescription: ${this.#_description}` +
            `\nDue Date: ${format(this.#_dueDate, DATE_FORMAT)}` +
            `\nPriority: ${this.#_priority}` +
            `\nCompleted: ${this.#_completed}` +
            `\nCreated Date: ${format(this.#_createdDate, DATE_FORMAT)}` +
            `\nLast Updated Date: ${format(this.#_lastUpdatedDate, DATE_FORMAT)}`
        )
    }
}