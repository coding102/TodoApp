var moment = require('moment');

// node playground/momentexamples.js

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1459111648
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));