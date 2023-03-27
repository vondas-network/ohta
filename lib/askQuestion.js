function askQuestion(ask, service, operation, msg) {
    const ohta = require("./ohta");
    const crypto = require('crypto');
    var askOhta = ohta.fukuisan.child();
    var requestId = crypto.randomBytes(20).toString('hex');

    if (ask == 'info') {
        askOhta.info(msg, {
            operation: operation,
            requestId: requestId,
            service: service,
        });
    } else if (ask == 'error') {
        askOhta.error(new Error(msg, {
            operation: operation,
            requestId: requestId,
            service: service,
        }));
    }
}

module.exports = { askQuestion }