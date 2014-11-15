
'use strict';

var should = require('should'),
    spanner = require('./../');

describe('Spanner', function() {

    describe('#getDigits', function() {

        it('should return 0 when the value is not present', function() {
            spanner.getDigits(0).should.equal('0');
        });

    });

});