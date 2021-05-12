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
    const firstName: string = capitalize(user.first_name)
    const lastName: string = capitalize(user.last_name)
    console.log(`${firstName} ${lastName}`)

    // Make and Model
    const make: string = titleCase(user.make)
    const model: string = titleCase(user.model)
    console.log(`${make} ${model}`)

    // Challenge 2
    const purchasedDate: typeof EasyDate = new EasyDate(user.purchased)
    console.log(purchasedDate.format('Purchased: %B %D, %Y'))

    // Challenge 3
    const lastPaymentDate: typeof EasyDate = new EasyDate(user.lastpayment)
    const timeAgo: string = new EasyDate().when(lastPaymentDate)
    console.log(`Last Payment: ${timeAgo}`)

    // Challenge 4
    console.log(`Phone: ${formatPhoneNumer(user.phone)}`)

    // City name
    console.log(`City: ${titleCase(user.city)}`)

    // Add trailing newline
    console.log()
  })
}

// Uppercase the first letter of a string
function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

// Uppercase the first letter in each word of a string
function titleCase(str: string): string {
  // split words into array
  const words: string[] = str.split(' ')

  // capitalize each word
  const titledWords: string[] = words.map((word: string): string => {
    return capitalize(word)
  })

  // return the new string
  return titledWords.join(' ')
}

// Takes a 10 digit phone number string and formats it into (000) 000-0000 format
function formatPhoneNumer(phoneNum: string): string {
  if (phoneNum.length != 10) {
    return `Phone number: ${phoneNum} is not valid.`
  }

  const AreaCode: string = phoneNum.substring(0, 3)
  const Prefix: string = phoneNum.substring(3, 6)
  const Subscriber: string = phoneNum.substring(6, 10)

  return `(${AreaCode}) ${Prefix}-${Subscriber}`
}

// printUserData(userData)

module.exports = { formatPhoneNumer, printUserData, capitalize, titleCase }