
'use strict';

var should = require('should'),
    spanner = require('./../');

describe('Spanner', function() {

    describe('#getDigits()', function() {

        it('should return `0` when the value = 0 and set digit = 0', function() {
            spanner.padDigits(0, 0).should.equal('0');
        });

        it('should return `0` when the value = 0 and set digit = 1', function() {
            spanner.padDigits(0, 1).should.equal('0');
        });

        it('should return `00` when the value = 0 and set digit = 2', function() {
            spanner.padDigits(0, 2).should.equal('00');
        });

        it('should return `000` when the value = 0 and set digit = 3', function() {
            spanner.padDigits(0, 3).should.equal('000');
        });

    });

});

