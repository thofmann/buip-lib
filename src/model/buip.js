'use strict';

import { validateId, validateTitle, validateText, validateTimestamp } from '../lib/validator';

const TITLE = Symbol();
const TEXT = Symbol();
const ID = Symbol();
const SUBMISSION_TIMESTAMP = Symbol();

export default class Buip {

    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.text = data.text;
        this.submissionTimestamp = data.submissionTimestamp;
    }

    get id() {
        return this[ID];
    }

    set id(id) {
        validateId(id);
        this[ID] = id;
    }

    get title() {
        return this[TITLE];
    }

    set title(title) {
        validateTitle(title);
        this[TITLE] = title;
    }

    get text() {
        return this[TEXT];
    }

    set text(text) {
        validateText(text);
        this[TEXT] = text;
    }

    get submissionTimestamp() {
        return this[SUBMISSION_TIMESTAMP];
    }

    set submissionTimestamp(submissionTimestamp) {
        validateTimestamp(submissionTimestamp);
        this[SUBMISSION_TIMESTAMP] = submissionTimestamp;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            text: this.text,
            submissionTimestamp: this.submissionTimestamp
        }
    }

    static fromJSON(data) {
        return new Buip(data);
    }

}
