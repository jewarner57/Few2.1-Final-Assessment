const EasyDate = require('@jewarner57/easydate')

type User = {
  id: number
  first_name: string
  last_name: string
  purchased: Date
  lastpayment: Date
  phone: string
  make: string
  model: string
  city: string
};

// Challenge 0
const userData: User[] = require('./data.json')

userData.forEach((user: User): void => {

  //  Challenge 1
  console.log(capitalize(user.first_name))
  console.log(capitalize(user.last_name))

  // Challenge 2
  const purchasedDate: typeof EasyDate = new EasyDate(user.purchased)
  console.log(purchasedDate.format('%B %D, %Y'))
})

// Uppercase the first letter of a string
function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}
