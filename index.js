const EasyDate = require('@jewarner57/easydate')
const EasyAsString = require('@jewarner57/easy-as-string')
// Challenge 0
const userData = require('./data.json')

userData.forEach((user) => {
  //  Challenge 1
  console.log(user.first_name.capitalize())
  console.log(user.last_name.capitalize())
})
