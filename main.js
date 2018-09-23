var request = require('request');
var wait = require('wait-for-stuff');
//date = yyyy-mm-dd
var date = new Date(process.argv[2]);
var to = "INR";
var usd = 'USD_' + to;
var gbp = 'GBP_' + to;
var eur = 'EUR_' + to;
var cny = 'CNY_' + to;
var jpy = 'JPY_' + to;
process.stdout.write("DATE       |USD      |GBP      |EUR      |JPY     |CNY");
do {
    process.stdout.write("\n"+date.toString().slice(4,15));
    request('http://free.currencyconverterapi.com/api/v6/convert?q=' + usd + '&compact=y&date=' + date.toISOString().slice(0,10) + '', function (error, response, body) {
        var json = JSON.parse(body)[usd]["val"];
        process.stdout.write("|"+json[date.toISOString().slice(0,10)].toFixed(6));
    });
    wait.for.time(2);
    request('http://free.currencyconverterapi.com/api/v6/convert?q=' + gbp + '&compact=y&date=' + date.toISOString().slice(0,10) + '', function (error, response, body) {
        var json = JSON.parse(body)[gbp]["val"];
        process.stdout.write("|"+json[date.toISOString().slice(0,10)].toFixed(6));
        });
    wait.for.time(2);
    request('http://free.currencyconverterapi.com/api/v6/convert?q=' + eur + '&compact=y&date=' + date.toISOString().slice(0,10) + '', function (error, response, body) {
        var json = JSON.parse(body)[eur]["val"];
        process.stdout.write("|"+json[date.toISOString().slice(0,10)].toFixed(6));
    });
    wait.for.time(2);
    request('http://free.currencyconverterapi.com/api/v6/convert?q=' + jpy + '&compact=y&date=' + date.toISOString().slice(0,10) + '', function (error, response, body) {
        var json = JSON.parse(body)[jpy]["val"];
        process.stdout.write("|"+json[date.toISOString().slice(0,10)].toFixed(6));
    });
    wait.for.time(2);
    request('http://free.currencyconverterapi.com/api/v6/convert?q=' + cny + '&compact=y&date=' + date.toISOString().slice(0,10) + '', function (error, response, body) {
        var json = JSON.parse(body)[cny]["val"];
        process.stdout.write("|"+json[date.toISOString().slice(0,10)].toFixed(6));
    });
    wait.for.time(2);
    date.setDate(new Date(date).getDate() + 1);
} while (date < new Date(process.argv[3]));
