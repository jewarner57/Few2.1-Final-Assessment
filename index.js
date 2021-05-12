var EasyDate = require('@jewarner57/easydate');
// Challenge 0
var userData = require('./data.json');
function printUserData(userData) {
    userData.forEach(function (user) {
        //  Challenge 1
        console.log(capitalize(user.first_name));
        console.log(capitalize(user.last_name));
        // Challenge 2
        var purchasedDate = new EasyDate(user.purchased);
        console.log(purchasedDate.format('%B %D, %Y'));
        // Challenge 3
        var lastPaymentDate = new EasyDate(user.lastpayment);
        var timeAgo = new EasyDate().when(lastPaymentDate);
        console.log("Last Payment: " + timeAgo);
        // Challenge 4
        console.log(formatPhoneNumer(user.phone));
    });
}
// Uppercase the first letter of a string
function capitalize(str) {
    return "" + str[0].toUpperCase() + str.slice(1);
}
// Takes a 10 digit phone number string and formats it into (000) 000-0000 format
function formatPhoneNumer(phoneNum) {
    if (phoneNum.length != 10) {
        return "Phone number: " + phoneNum + " is not valid.";
    }
    var AreaCode = phoneNum.substring(0, 3);
    var Prefix = phoneNum.substring(3, 6);
    var Subscriber = phoneNum.substring(6, 10);
    return "(" + AreaCode + ") " + Prefix + "-" + Subscriber;
}
module.exports = { formatPhoneNumer: formatPhoneNumer, printUserData: printUserData, capitalize: capitalize };
