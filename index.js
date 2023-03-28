/**
 * @name index.js
 * @author Christopher Konopka 
 * @version v0.0.6
 * @summary A microservice logging library inspired by Ohta and Fukuisan banter from Iron Chef Japan
 */

const ohta = require('./lib/askQuestion');

function askOhtaAbout(ask, service, module, msg) {
    ohta.askQuestion(ask, service, module, msg);
}

module.exports = { askOhtaAbout }
