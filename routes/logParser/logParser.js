let fs = require('fs');
const requestLog = "./logs/requests.log";
const orderLog = "./logs/orders.log";
const itemValues = require("./itemValues.json");

function gettotal(callback) {
    fs.readFile(orderLog, (err, data) => {
        if(err) {
            throw err;
        }

        let items = data.toString().trim().split("\n");
        let total = 0;

        for(let i = 0; i < items.length; i++) {
            let item = items[i].split(',');
            if(item[0] == undefined || item[0] == "") {
                continue;
            }

            total += itemValues[item[0]]*parseInt(item[1]);
        }

        callback(total);
    });
}

function gettopseller(callback) {
    fs.readFile(orderLog, (err, data) => {
        if(err) {
            throw err;
        }

        let items = data.toString().trim().split("\n");
        let bins = {};
        let keys = [];
        let topSeller = "";
        let topSellerAmount = 0;

        for(let i = 0; i < items.length; i++) {
            let item = items[i].split(',');
            if(item[0] == undefined || item[0] == "") {
                continue;
            }
            
            if(bins[item[0]] == undefined) {
                bins[item[0]] = parseInt(item[1]);
                keys[keys.length] = item[0];
            }
            else {
                bins[item[0]] += parseInt(item[1]);
            }
        }

        for(let i = 0; i < keys.length; i++) {
            if(bins[keys[i]] > topSellerAmount) {
                topSeller = keys[i];
                topSellerAmount = bins[keys[i]];
            }
        }

        callback(topSeller);
    });

}

function getrequestcount(callback) {
    fs.readFile(requestLog, (err, data) => {
        if(err) {
            throw err;
        }

        let requests = data.toString().trim().split('\n');
        callback(requests.length);
    });
}

function getlastrequeststatus(callback) {
    fs.readFile(requestLog, (err, data) => {
        if(err) {
            throw err;
        }

        let requests = data.toString().trim().split('\n');
        let lastRequest = requests[requests.length - 1].split(',');
        callback(lastRequest[2]);
    });
}

function getlastrequesttime(callback) {
    fs.readFile(requestLog, (err, data) => {
        if(err) {
            throw err;
        }

        let requests = data.toString().trim().split('\n');
        let lastRequest = requests[requests.length - 1].split(',');
        callback(lastRequest[1]);
    });
}

module.exports = { gettotal, gettopseller, getrequestcount, getlastrequeststatus, getlastrequesttime };