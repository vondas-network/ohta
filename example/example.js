const fukuisan = require("../index.js");

var key = "YOUR_API_KEY";
var route = "futures";
var query = "openInterest";
var symbol = "BTC";
var interval = "12H";

let obj = {
    one: key,
    two: route,
    three: query
}

fukuisan.askOhta(obj);