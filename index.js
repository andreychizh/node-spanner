
'use strict';

/**
 * Get string with digits number
 * @param value
 * @param digits
 * @returns {string}
 */
exports.padDigits = function(value, digits) {
    var str = '' + value;
    while (str.length < digits) { str = '0' + str; }
    return str;
};