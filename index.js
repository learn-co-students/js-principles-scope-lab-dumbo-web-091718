// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
}

const leastFavoriteCustomer = 'shemar';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sarah';
}