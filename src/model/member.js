'use strict';

import Identifiable from './identifiable';

const NAME = Symbol();

const NAME_MINLENGTH = 1;
const NAME_MAXLENGTH = 64;

export default class Member extends Identifiable {

    constructor(data) {
        super(data);
        this[NAME] = data.name;
    }

    get name() {
        return this[NAME];
    }

    set name(name) {
        if (typeof name === 'undefined') {
            throw new Error('A name is required.');
        }
        if (typeof name !== 'string') {
            throw new Error('The name must be a string.');
        }
        if (name.length < NAME_MINLENGTH) {
            throw new Error('The name cannot be shorter than ' + NAME_MINLENGTH + ' characters.');
        }
        if (name.length > NAME_MAXLENGTH) {
            throw new Error('The name cannot be longer than ' + NAME_MAXLENGTH + ' characters.');
        }
        this[NAME] = name;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name
        }
    }

    static fromJSON(data) {
        return new Member(data);
    }

}
