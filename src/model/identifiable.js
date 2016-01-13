'use strict';

const ID = Symbol();

export default class Identifiable {

    constructor(data) {
        this[ID] = data.id;
    }

    get id() {
        return this[ID];
    }

    set id(id) {
        if (typeof id === 'undefined') {
            throw new Error('An id is required.');
        }
        if (typeof id !== 'number') {
            throw new Error('The id must be a number.');
        }
        if (id % 1 !== 0) {
            throw new Error('The id must be an integer.');
        }
        if (id < 0) {
            throw new Error('The id cannot be negative.');
        }
        this[ID] = id;
    }

}
