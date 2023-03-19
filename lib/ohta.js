/**
 * ohta.js
 * @author Christopher Konopka
 * @description Ohta logs responses from questions proposed by Fukui using Winston
 */

const winston = require('winston');
const { combine, timestamp, align, json, errors } = winston.format;

const fukuisan = winston.createLogger({
    level: 'info',
    format: combine(errors({ stack: true }), timestamp(), json(), align()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: './logs/app-info.log',
            level: 'info'
        }),
        new winston.transports.File({
            filename: './logs/app-error.log',
            level: 'error',
        })
    ]
})

module.exports = { fukuisan }