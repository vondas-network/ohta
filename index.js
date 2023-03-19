/**
 * @name index.js
 * @author Christopher Konopka 
 * @version v0.0.1
 * @summary Unofficial Coinglass API for Node.js
 */

/**
 * Libraries
 */

const ohta = require('./lib/fukuisanAsksAbout');
/**
 * coinglass
 */
function askOhta(obj) {
    ohta.fukuisanAsksAbout(obj.one, obj.two, obj.three);
}

module.exports = { askOhta }