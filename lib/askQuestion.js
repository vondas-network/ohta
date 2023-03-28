function askQuestion(ask, service, operation, msg) {
    const ohta = require("./ohta");
    const crypto = require('crypto');
    var askOhta = ohta.fukuisan.child();
    var logID = crypto.randomBytes(20).toString('hex');

    if (ask == 'info') {
        askOhta.info(msg, {
            operation: operation,
            logID: logID,
            service: service,
        });
    } else if (ask == 'error') {
        askOhta.error(new Error(msg, {
            operation: operation,
            logID: logID,
            service: service,
        }));
    }
}

module.exports = { askQuestion }