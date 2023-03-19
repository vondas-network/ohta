/**
 * app.js
 * @author Christopher Konopka
 * @description Core server for facilitating API request to lenscrafter processes & utilities
 */

/**
 **************************
 * DEPENDENCIES ***********
 ************************** 
 */
const fs = require("fs");
var express = require('express')
const ohta = require('../lib/fukuiAsksAbout');
/**
 **************************
 * EXPRESS ****************
 ************************** 
 */
var app = express()
var port = 9000
var HOST = '0.0.0.0';

/**
 **************************
 * DYNAMIC ****************
 ************************** 
 */

/**
 * /sc/getevmasm
 * @description 
 */
app.get('/test', function(req, res) {
    ohta.fukuiAsksAbout('LcEvmasm', 'index.js - /evmasm', "REQUEST");
    res.send(200);
})

/**
 **************************
 * SERVER OP **************
 ************************** 
 */
app.listen(port, HOST, function() {
    ohta.fukuiAsksAbout('LcEvmasm', 'index.js - init', "PORT - " + port);
})