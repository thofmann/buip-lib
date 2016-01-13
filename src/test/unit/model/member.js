'use strict';

import assert from 'assert';

import { Member } from '../../../index';

describe('Member', function() {

    let alice;

    beforeEach(function() {

        alice = new Member({
            id: 1,
            name: 'Alice'
        });

    });

    describe('#id', function() {

        it('should return the id', function() {
            assert.strictEqual(alice.id, 1);
        });

        it('should require an id', function() {
            assert.throws(
                function() {
                    alice.id = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    alice.id = 1.5;
                },
                Error
            );
        });

        it('should not accept number less than 1', function() {
            assert.throws(
                function() {
                    alice.id = 0;
                },
                Error
            );
        });

        it('should be able to change the id', function() {
            alice.id = 2;
            assert.strictEqual(alice.id, 2);
        });

    });

    describe('#name', function() {

        it('should return the member\'s name', function() {
            assert.strictEqual(alice.name, 'Alice');
        });

        it('should require a name', function() {
            assert.throws(
                function() {
                    alice.name = undefined;
                },
                Error
            );
        });

        it('should not accept an empty name', function() {
            assert.throws(
                function() {
                    alice.name = '';
                },
                Error
            );
        });

        it('should not accept an excessively long name', function() {
            alice.name = new Array(64 + 1).join('a');
            assert.throws(
                function() {
                    alice.name = new Array(64 + 2).join('a');
                },
                Error
            );
        });

        it('should be able to change the name', function() {
            alice.name = 'Bob';
            assert.strictEqual(alice.name, 'Bob');
        });

    });

    describe('#toJSON', function() {

        it('should convert the member to a JSON object', function() {
            assert.deepEqual(alice.toJSON(), {
                id: 1,
                name: 'Alice'
            });
        });

    });

    describe('#fromJSON', function() {

        it('should create a Member from a JSON object', function() {
            alice = Member.fromJSON({
                id: 2,
                name: 'Bob'
            });
            assert.strictEqual(alice.id, 2);
            assert.strictEqual(alice.name, 'Bob');
        });

    });

});
