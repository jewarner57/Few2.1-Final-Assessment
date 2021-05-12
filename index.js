var EasyDate = require('@jewarner57/easydate');
// Challenge 0
var userData = require('./data.json');
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
});
// Uppercase the first letter of a string
function capitalize(str) {
    return "" + str[0].toUpperCase() + str.slice(1);
}
