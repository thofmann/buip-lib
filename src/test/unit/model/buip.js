'use strict';

import assert from 'assert';

import { Buip } from '../../../index';

describe('Buip', function() {

    let proposal;
    let currentTimestamp;

    beforeEach(function() {

        currentTimestamp = Math.floor(Date.now() / 1000);
        proposal = new Buip({
            id: 1,
            title: 'Test BUIP: Please ignore',
            text: '*Insert BUIP here*',
            submissionTimestamp: currentTimestamp
        });

    });

    describe('#id', function() {

        it('should return the id', function() {
            assert.strictEqual(proposal.id, 1);
        });

        it('should require an id', function() {
            assert.throws(
                function() {
                    proposal.id = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    proposal.id = 1.5;
                },
                Error
            );
        });

        it('should not accept a number less than 1', function() {
            assert.throws(
                function() {
                    proposal.id = 0;
                },
                Error
            );
        });

        it('should be able to change the id', function() {
            proposal.id = 2;
            assert.strictEqual(proposal.id, 2);
        });

    });

    describe('#title', function() {

        it('should return the BUIP\'s title', function() {
            assert.strictEqual(proposal.title, 'Test BUIP: Please ignore');
        });

        it('should require a title', function() {
            assert.throws(
                function() {
                    proposal.title = undefined;
                },
                Error
            );
        });

        it('should not accept an empty title', function() {
            proposal.title = 'a';
            assert.throws(
                function() {
                    proposal.title = '';
                },
                Error
            );
        });

        it('should not accept an excessively long title', function() {
            proposal.title = new Array(512 + 1).join('a');
            assert.throws(
                function() {
                    proposal.title = new Array(512 + 2).join('a');
                },
                Error
            );
        });

        it('should be able to change the title', function() {
            proposal.title = 'Test 2';
            assert.strictEqual(proposal.title, 'Test 2');
        });

    });

    describe('#text', function() {

        it('should return the BUIP\'s text', function() {
            assert.strictEqual(proposal.text, '*Insert BUIP here*');
        });

        it('should require a text', function() {
            assert.throws(
                function() {
                    proposal.text = undefined;
                },
                Error
            );
        });

        it('should not accept an empty text', function() {
            proposal.text = 'a';
            assert.throws(
                function() {
                    proposal.text = '';
                },
                Error
            );
        });

        it('should not accept an excessively long text', function() {
            proposal.text = new Array(1048576 + 1).join('a');
            assert.throws(
                function() {
                    proposal.text = new Array(1048576 + 2).join('a');
                },
                Error
            );
        });

        it('should be able to change the text', function() {
            proposal.text = 'Test 2';
            assert.strictEqual(proposal.text, 'Test 2');
        });

    });

    describe('#submissionTimestamp', function() {

        it('should return the submissionTimestamp', function() {
            assert.strictEqual(proposal.submissionTimestamp, currentTimestamp);
        });

        it('should require a submissionTimestamp', function() {
            assert.throws(
                function() {
                    proposal.submissionTimestamp = undefined;
                },
                Error
            );
        });

        it('should require an integer', function() {
            assert.throws(
                function() {
                    proposal.submissionTimestamp = currentTimestamp + 0.5;
                },
                Error
            );
        });

        it('should not accept a number less than 1231006505', function() {
            proposal.submissionTimestamp = 1231006505;
            assert.throws(
                function() {
                    proposal.id = 1231006505 - 1;
                },
                Error
            );
        });

        it('should not accept a timestamp too far into the future', function() {
            proposal.submissionTimestamp = currentTimestamp + 30;
            assert.throws(
                function() {
                    proposal.submissionTimestamp = currentTimestamp + 90;
                },
                Error
            );
        });

        it('should be able to change the submissionTimestamp', function() {
            proposal.submissionTimestamp = currentTimestamp - 5;
            assert.strictEqual(proposal.submissionTimestamp, currentTimestamp - 5);
        });

    });

    describe('#toJSON', function() {

        it('should convert the BUIP to a JSON object', function() {
            assert.deepEqual(proposal.toJSON(), {
                id: 1,
                title: 'Test BUIP: Please ignore',
                text: '*Insert BUIP here*',
                submissionTimestamp: currentTimestamp
            });
        });

    });

    describe('#fromJSON', function() {

        it('should create a BUIP from a JSON object', function() {
            proposal = Buip.fromJSON({
                id: 2,
                title: 'Test BUIP 2: Please ignore',
                text: '*Insert BUIP 2 here*',
                submissionTimestamp: currentTimestamp - 10
            });
            assert.strictEqual(proposal.id, 2);
            assert.strictEqual(proposal.title, 'Test BUIP 2: Please ignore');
            assert.strictEqual(proposal.text, '*Insert BUIP 2 here*');
            assert.strictEqual(proposal.submissionTimestamp, currentTimestamp - 10);
        });

    });

});
