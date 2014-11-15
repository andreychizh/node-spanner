
'use strict';

var should = require('should'),
    spanner = require('./../');

describe('Spanner', function() {

    describe('#padDigits()', function() {

        it('should return `0` when the value = 0 and set digit = 1', function() {
            spanner.padDigits(0, 1).should.equal('0');
        });

        it('should return `00` when the value = 0 and set digit = 2', function() {
            spanner.padDigits(0, 2).should.equal('00');
        });

        it('should return `000` when the value = 0 and set digit = 3', function() {
            spanner.padDigits(0, 3).should.equal('000');
        });

        it('should return `0000000000` when the value = 0 and set digit = 10', function() {
            spanner.padDigits(0, 10).should.equal('0000000000');
        });

        it('should return `1` when the value = 1 and set digit = 0', function() {
            spanner.padDigits(1, 0).should.equal('1');
        });

        it('should return `1` when the value = 1 and set digit = 1', function() {
            spanner.padDigits(1, 1).should.equal('1');
        });

        it('should return `01` when the value = 1 and set digit = 2', function() {
            spanner.padDigits(1, 2).should.equal('01');
        });

        it('should return `001` when the value = 1 and set digit = 3', function() {
            spanner.padDigits(1, 3).should.equal('001');
        });

        it('should return `0000000001` when the value = 1 and set digit = 10', function() {
            spanner.padDigits(1, 10).should.equal('0000000001');
        });

        it('should return `10` when the value = 10 and set digit = 0', function() {
            spanner.padDigits(10, 0).should.equal('10');
        });

        it('should return `10` when the value = 10 and set digit = 1', function() {
            spanner.padDigits(10, 1).should.equal('10');
        });

        it('should return `10` when the value = 10 and set digit = 2', function() {
            spanner.padDigits(10, 2).should.equal('10');
        });

        it('should return `010` when the value = 10 and set digit = 3', function() {
            spanner.padDigits(10, 3).should.equal('010');
        });

        it('should return `0000000010` when the value = 10 and set digit = 10', function() {
            spanner.padDigits(10, 10).should.equal('0000000010');
        });

        it('should return `100` when the value = 100 and set digit = 0', function() {
            spanner.padDigits(100, 0).should.equal('100');
        });

        it('should return `100` when the value = 100 and set digit = 1', function() {
            spanner.padDigits(100, 1).should.equal('100');
        });

        it('should return `100` when the value = 100 and set digit = 2', function() {
            spanner.padDigits(100, 2).should.equal('100');
        });

        it('should return `100` when the value = 100 and set digit = 3', function() {
            spanner.padDigits(100, 3).should.equal('100');
        });

        it('should return `0100` when the value = 100 and set digit = 4', function() {
            spanner.padDigits(100, 4).should.equal('0100');
        });

        it('should return `0000000100` when the value = 100 and set digit = 10', function() {
            spanner.padDigits(100, 10).should.equal('0000000100');
        });

    });

});

