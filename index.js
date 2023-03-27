/**
 * @name index.js
 * @author Christopher Konopka 
 * @version v0.0.1
 * @summary Unofficial Coinglass API for Node.js
 */

const ohta = require('./lib/askQuestion');

function askOhtaAbout(ask, service, module, msg) {
    ohta.askQuestion(ask, service, module, msg);
}

module.exports = { askOhtaAbout }