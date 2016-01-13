'use strict';

import { validateId, validateChoice } from '../lib/validator';

const ID = Symbol();
const BUIP_ID = Symbol();
const MEMBER_ID = Symbol();
const CHOICE = Symbol();

export default class Vote {

    constructor(data) {
        this.id = data.id;
        this.buipId = data.buipId;
        this.memberId = data.memberId;
        this.choice = data.choice;
    }

    get id() {
        return this[ID];
    }

    set id(id) {
        validateId(id);
        this[ID] = id;
    }

    get buipId() {
        return this[BUIP_ID];
    }

    set buipId(buipId) {
        validateId(buipId);
        this[BUIP_ID] = buipId;
    }

    get memberId() {
        return this[MEMBER_ID];
    }

    set memberId(memberId) {
        validateId(memberId);
        this[MEMBER_ID] = memberId;
    }

    get choice() {
        return this[CHOICE];
    }

    set choice(choice) {
        validateChoice(choice);
        this[CHOICE] = choice;
    }

    toJSON() {
        return {
            id: this.id,
            buipId: this.buipId,
            memberId: this.memberId,
            choice: this.choice
        }
    }

    static fromJSON(data) {
        return new Vote(data);
    }

}
