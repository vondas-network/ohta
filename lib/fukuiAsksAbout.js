function fukuiAsksAbout(service, module, msg) {
    const ohta = require("./ohta");
    const crypto = require('crypto');
    var askOhta = ohta.fukuisan.child();
    var hashID = crypto.randomBytes(20).toString('hex');
    askOhta.info(msg, {
        operation: module,
        requestId: hashID,
        service: service,
    });
}

module.exports = { fukuiAsksAbout }