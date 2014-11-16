
'use strict';

var url = require('url');

/**
 * Get string with digits number
 * @param number
 * @param digits
 * @returns {string}
 */
exports.padDigits = function(number, digits) {
    var str = '' + number;
    while (str.length < digits) { str = '0' + str; }
    return str;
};

/**
 * Match url by pattern
 * @param uri
 * @param pattern
 * @returns {object}
 */
exports.matchUrl = function(uri, pattern) {
    var urlData = url.parse(uri, true),
        sourceData = urlData.pathname.split('/'),
        patternData = pattern.split('/'),
        match = true,
        params = {};

    patternData.forEach(function(part, i) {
        if (sourceData[i] && part[0] === ':') {
            params[part.substring(1)] = sourceData[i];
        } else if (sourceData[i] !== patternData[i]) {
            match = false;
        }
    });

    return { match: match, params: params, query: urlData.query };
};