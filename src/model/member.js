'use strict';

import { validateId, validateName } from '../lib/validator';

const ID = Symbol();
const NAME = Symbol();

export default class Member {

    constructor(data) {
        this[ID] = data.id;
        this[NAME] = data.name;
    }

    get id() {
        return this[ID];
    }

    set id(id) {
        validateId(id);
        this[ID] = id;
    }

    get name() {
        return this[NAME];
    }

    set name(name) {
        validateName(name);
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
