'use strict';

const ID_MIN = 1;
const ID_MAX = 1073741824;

const TITLE_MINLENGTH = 1;
const TITLE_MAXLENGTH = 512;

const TEXT_MINLENGTH = 1;
const TEXT_MAXLENGTH = 1048576;

const NAME_MINLENGTH = 1;
const NAME_MAXLENGTH = 64;

export function validateId(id) {
    if (typeof id === 'undefined') {
        throw new Error('An id is required.');
    }
    if (typeof id !== 'number') {
        throw new Error('The id must be a number.');
    }
    if (id % 1 !== 0) {
        throw new Error('The id must be an integer.');
    }
    if (id < ID_MIN) {
        throw new Error('The id cannot be less than ' + ID_MIN + '.');
    }
    if (id > ID_MAX) {
        throw new Error('The id cannot be greater than ' + ID_MAX + '.');
    }
}

export function validateTitle(title) {
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
}

export function validateText(text) {
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
}

export function validateName(name) {
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
}
