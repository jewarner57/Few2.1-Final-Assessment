var EasyDate = require('@jewarner57/easydate');
// Challenge 0
var userData = require('./data.json');
function printUserData(userData) {
    userData.forEach(function (user) {
        //  Challenge 1
        var firstName = capitalize(user.first_name);
        var lastName = capitalize(user.last_name);
        console.log(firstName + " " + lastName);
        // Make and Model
        var make = titleCase(user.make);
        var model = titleCase(user.model);
        console.log(make + " " + model);
        // Challenge 2
        var purchasedDate = new EasyDate(user.purchased);
        console.log(purchasedDate.format('Purchased: %B %D, %Y'));
        // Challenge 3
        var lastPaymentDate = new EasyDate(user.lastpayment);
        var timeAgo = new EasyDate().when(lastPaymentDate);
        console.log("Last Payment: " + timeAgo);
        // Challenge 4
        console.log("Phone: " + formatPhoneNumer(user.phone));
        // City name
        console.log("City: " + titleCase(user.city));
        // Add trailing newline
        console.log();
    });
}
// Uppercase the first letter of a string
function capitalize(str) {
    return "" + str[0].toUpperCase() + str.slice(1);
}
// Uppercase the first letter in each word of a string
function titleCase(str) {
    // split words into array
    var words = str.split(' ');
    // capitalize each word
    var titledWords = words.map(function (word) {
        return capitalize(word);
    });
    // return the new string
    return titledWords.join(' ');
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
printUserData(userData);
module.exports = { formatPhoneNumer: formatPhoneNumer, printUserData: printUserData, capitalize: capitalize, titleCase: titleCase };
