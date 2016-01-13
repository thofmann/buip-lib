'use strict';

import assert from 'assert';

import { Member } from '../../../index';

describe('Member', function() {

    let alice;
    let currentTimestamp = Math.floor(Date.now() / 1000);

    beforeEach(function() {

        alice = new Member({
            id: 1,
            name: 'Alice',
            joinTimestamp: currentTimestamp
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

        it('should not accept a number less than 1', function() {
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

    describe('#joinTimestamp', function() {

        it('should return the joinTimestamp', function() {
            assert.strictEqual(alice.joinTimestamp, currentTimestamp);
        });

        it('should require a joinTimestamp', function() {
            assert.throws(
                function() {
                    alice.joinTimestamp = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    alice.joinTimestamp = currentTimestamp + 0.5;
                },
                Error
            );
        });

        it('should not accept a number less than 1231006505', function() {
            alice.joinTimestamp = 1231006505;
            assert.throws(
                function() {
                    alice.id = 1231006505 - 1;
                },
                Error
            );
        });

        it('should not accept a timestamp too far into the future', function() {
            alice.joinTimestamp = currentTimestamp + 30;
            assert.throws(
                function() {
                    alice.joinTimestamp = currentTimestamp + 90;
                },
                Error
            );
        });

        it('should be able to change the joinTimestamp', function() {
            alice.joinTimestamp = currentTimestamp - 5;
            assert.strictEqual(alice.joinTimestamp, currentTimestamp - 5);
        });

    });

    describe('#toJSON', function() {

        it('should convert the member to a JSON object', function() {
            assert.deepEqual(alice.toJSON(), {
                id: 1,
                name: 'Alice',
                joinTimestamp: currentTimestamp
            });
        });

    });

    describe('#fromJSON', function() {

        it('should create a Member from a JSON object', function() {
            alice = Member.fromJSON({
                id: 2,
                name: 'Bob',
                joinTimestamp: currentTimestamp - 10
            });
            assert.strictEqual(alice.id, 2);
            assert.strictEqual(alice.name, 'Bob');
            assert.strictEqual(alice.joinTimestamp, currentTimestamp - 10);
        });

    });

});
