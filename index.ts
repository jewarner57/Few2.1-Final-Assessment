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

function printUserData(userData: User[]): void {
  userData.forEach((user: User): void => {

    //  Challenge 1
    console.log(capitalize(user.first_name))
    console.log(capitalize(user.last_name))

    // Challenge 2
    const purchasedDate: typeof EasyDate = new EasyDate(user.purchased)
    console.log(purchasedDate.format('%B %D, %Y'))

    // Challenge 3
    const lastPaymentDate: typeof EasyDate = new EasyDate(user.lastpayment)
    const timeAgo: string = new EasyDate().when(lastPaymentDate)
    console.log(`Last Payment: ${timeAgo}`)

    // Challenge 4
    console.log(formatPhoneNumer(user.phone))
  })
}

// Uppercase the first letter of a string
function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

// Takes a 10 digit phone number string and formats it into (000) 000-0000 format
function formatPhoneNumer(phoneNum: string): string {
  if (phoneNum.length != 10) {
    return `Phone number: ${phoneNum} is not valid.`
  }

  const AreaCode = phoneNum.substring(0, 3)
  const Prefix = phoneNum.substring(3, 6)
  const Subscriber = phoneNum.substring(6, 10)

  return `(${AreaCode}) ${Prefix}-${Subscriber}`
}

module.exports = { formatPhoneNumer, printUserData, capitalize }