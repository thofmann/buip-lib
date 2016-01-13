'use strict';

import { validateId, validateTitle, validateText } from '../lib/validator';

const TITLE = Symbol();
const TEXT = Symbol();
const ID = Symbol();

export default class Buip {

    constructor(data) {
        this[ID] = data.id;
        this[TITLE] = data.title;
        this[TEXT] = data.text;
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
