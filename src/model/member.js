'use strict';

import { validateId, validateName, validateTimestamp } from '../lib/validator';

const ID = Symbol();
const NAME = Symbol();
const JOIN_TIMESTAMP = Symbol();

export default class Member {

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.joinTimestamp = data.joinTimestamp;
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

    get joinTimestamp() {
        return this[JOIN_TIMESTAMP];
    }

    set joinTimestamp(joinTimestamp) {
        validateTimestamp(joinTimestamp);
        this[JOIN_TIMESTAMP] = joinTimestamp;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            joinTimestamp: this.joinTimestamp
        }
    }

    static fromJSON(data) {
        return new Member(data);
    }

}
