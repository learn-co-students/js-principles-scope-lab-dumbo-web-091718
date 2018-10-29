// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "lee"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = `not ${customerName}`
}

function overwriteBestCustomer() {
  bestCustomer = `maybe ${customerName}`
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "steve"
}
