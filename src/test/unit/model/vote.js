'use strict';

import assert from 'assert';

import { Vote } from '../../../index';

describe('Vote', function() {

    let vote;

    beforeEach(function() {

        vote = new Vote({
            id: 1,
            buipId: 2,
            memberId: 3,
            choice: 'accept'
        });

    });

    describe('#id', function() {

        it('should return the id', function() {
            assert.strictEqual(vote.id, 1);
        });

        it('should require an id', function() {
            assert.throws(
                function() {
                    vote.id = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    vote.id = 1.5;
                },
                Error
            );
        });

        it('should not accept a number less than 1', function() {
            assert.throws(
                function() {
                    vote.id = 0;
                },
                Error
            );
        });

        it('should be vote to change the id', function() {
            vote.id = 2;
            assert.strictEqual(vote.id, 2);
        });

    });

    describe('#buipId', function() {

        it('should return the buipId', function() {
            assert.strictEqual(vote.buipId, 2);
        });

        it('should require a buipId', function() {
            assert.throws(
                function() {
                    vote.buipId = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    vote.buipId = 1.5;
                },
                Error
            );
        });

        it('should not accept a negative number', function() {
            assert.throws(
                function() {
                    vote.buipId = -1;
                },
                Error
            );
        });

        it('should be vote to change the buipId', function() {
            vote.buipId = 3;
            assert.strictEqual(vote.buipId, 3);
        });

    });

    describe('#memberId', function() {

        it('should return the memberId', function() {
            assert.strictEqual(vote.memberId, 3);
        });

        it('should require a memberId', function() {
            assert.throws(
                function() {
                    vote.memberId = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    vote.memberId = 1.5;
                },
                Error
            );
        });

        it('should not accept a negative number', function() {
            assert.throws(
                function() {
                    vote.memberId = -1;
                },
                Error
            );
        });

        it('should be vote to change the memberId', function() {
            vote.memberId = 4;
            assert.strictEqual(vote.memberId, 4);
        });

    });

    describe('#title', function() {

        it('should return the vote\'s choice', function() {
            assert.strictEqual(vote.choice, 'accept');
        });

        it('should require a choice', function() {
            assert.throws(
                function() {
                    vote.choice = undefined;
                },
                Error
            );
        });

        it('should not accept an invalid choice', function() {
            assert.throws(
                function() {
                    vote.choice = 'undecided';
                },
                Error
            );
        });

        it('should be able to change the choice', function() {
            vote.choice = 'reject';
            assert.strictEqual(vote.choice, 'reject');
        });

    });

    describe('#toJSON', function() {

        it('should convert the vote to a JSON object', function() {
            assert.deepEqual(vote.toJSON(), {
                id: 1,
                buipId: 2,
                memberId: 3,
                choice: 'accept'
            });
        });

    });

    describe('#fromJSON', function() {

        it('should create a Vote from a JSON object', function() {
            vote = Vote.fromJSON({
                id: 4,
                buipId: 5,
                memberId: 6,
                choice: 'reject'
            });
            assert.strictEqual(vote.id, 4);
            assert.strictEqual(vote.buipId, 5);
            assert.strictEqual(vote.memberId, 6);
            assert.strictEqual(vote.choice, 'reject');
        });

    });

});
