var process = require('process'); 
const child_process = require('child_process');
var colors = require('colors');

function getCommitHash(){
    const gitCommand = "git rev-parse HEAD";
    return child_process.execSync(gitCommand).toString().trim();
}

const config = {
    pid: process.pid,
    commit: getCommitHash(),
    level: "debug",
}

function setHost(host) {
    config.host = host;
}

function setServiceName(serviceName) {
    config.service = serviceName;
}

function setServiceVersion(serviceVersion) {
    config.version = serviceVersion;
}

function setup({name, version, host = "localhost"}) {
    if ((name === undefined)|| (version === undefined))
        throw "Undefined service, set a service name and version"
    setHost(host);
    setServiceName(name);
    setServiceVersion(version);
}

function logg(msg, level = "debug"){
    message = Object.assign(config);
    message.message = msg;
    message = JSON.stringify(message);
    switch (level) {
        case 'debug':
            console.log(message);
            break;
        case 'info':
            console.log(message.green);
            break;
        case 'warning':
            console.log(message.yellow);
            break;
        case 'error':
            console.log(message.red.bold);
            break;
        case 'fatal':
            console.log(message.red.bold.underline);
            break;
        default:
            console.log(message);
            break;
    }
}

function d(message) {
    logg(message, 'debug');
}

function i(message) {
    logg(message, 'info');
}

function w(message) {
    logg(message, 'warning');
}

function e(message) {
    logg(message, 'deberrorug');
}

function f(message) {
    logg(message, 'fatal');
}

module.exports.d = d;
module.exports.i = i;
module.exports.w = w;
module.exports.e = e;
module.exports.f = f;
module.exports.setup = setup;
module.exports.logg = logg;
