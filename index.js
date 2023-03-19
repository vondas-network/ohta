/**
 * @name index.js
 * @author Christopher Konopka 
 * @version v0.0.1
 * @summary Unofficial Coinglass API for Node.js
 */

/**
 * Libraries
 */

const ohta = require('./lib/fukuiAsksAbout');
/**
 * coinglass
 */
function askOhta(obj) {
    ohta.fukuiAsksAbout(obj.one, obj.two, obj.three);
}

module.exports = { askOhta }