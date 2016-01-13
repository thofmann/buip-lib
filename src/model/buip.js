'use strict';

import Identifiable from './identifiable';

const TITLE = Symbol();
const TEXT = Symbol();

const TITLE_MINLENGTH = 1;
const TITLE_MAXLENGTH = 512;
const TEXT_MINLENGTH = 1;
const TEXT_MAXLENGTH = 1048576;

export default class Buip extends Identifiable {

    constructor(data) {
        super(data);
        this[TITLE] = data.title;
        this[TEXT] = data.text;
    }

    get title() {
        return this[TITLE];
    }

    set title(title) {
        if (typeof title === 'undefined') {
            throw new Error('A title is required.');
        }
        if (typeof title !== 'string') {
            throw new Error('The title must be a string.');
        }
        if (title.length < TITLE_MINLENGTH) {
            throw new Error('The title cannot be shorter than ' + TITLE_MINLENGTH + ' characters.');
        }
        if (title.length > TITLE_MAXLENGTH) {
            throw new Error('The title cannot be longer than ' + TITLE_MAXLENGTH + ' characters.');
        }
        this[TITLE] = title;
    }

    get text() {
        return this[TEXT];
    }

    set text(text) {
        if (typeof text === 'undefined') {
            throw new Error('A text is required.');
        }
        if (typeof text !== 'string') {
            throw new Error('The text must be a string.');
        }
        if (text.length < TEXT_MINLENGTH) {
            throw new Error('The text cannot be shorter than ' + TEXT_MINLENGTH + ' characters.');
        }
        if (text.length > TEXT_MAXLENGTH) {
            throw new Error('The text cannot be longer than ' + TEXT_MAXLENGTH + ' characters.');
        }
        this[TEXT] = text;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            text: this.text
        }
    }

    static fromJSON(data) {
        return new Buip(data);
    }

}
