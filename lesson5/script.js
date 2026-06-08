"use strict";

let projectName = prompt("What is the name of your project?");
let screenTypes = prompt("What types of screens need to be developed?");
let screenPrice;
do {
  screenPrice = +prompt("How much will this work cost?");
} while (isNaN(screenPrice) || screenPrice <= 0);
let isAdaptiveNeeded = confirm("Does the website need to be adaptive?");

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price;
    do {
      price = +prompt("How much will it cost?");
    } while (isNaN(price) || price <= 0);
    sum += price;
  }

  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getDiscountPercent = function (price) {
  if (price >= 30000) {
    return 10;
  } else if (price >= 15000) {
    return 5;
  } else if (price >= 0) {
    return 0;
  } else {
    return 0;
  }
};

const getServicePercentPrice = function () {
  let discountPercent = getDiscountPercent(fullPrice);
  return fullPrice - fullPrice * (discountPercent / 100);
};

const getTitle = function () {
  if (!projectName || !projectName.trim()) {
    return "";
  }

  let name = projectName.trim();
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
};

const getDiscountPercentMessage = function (price) {
  if (price >= 30000) {
    return "We offer a 10% discount";
  } else if (price >= 15000) {
    return "We offer a 5% discount";
  } else if (price >= 0) {
    return "No discount available";
  } else {
    return "Something went wrong";
  }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
projectName = getTitle();

showTypeOf(projectName);
showTypeOf(screenPrice);
showTypeOf(isAdaptiveNeeded);

console.log(allServicePrices);
console.log(getDiscountPercentMessage(fullPrice));

console.log(typeof projectName);
console.log(typeof screenPrice);
console.log(typeof isAdaptiveNeeded);

console.log(screenTypes ? screenTypes.length : 0);
console.log(servicePercentPrice);

console.log(
  "The cost of screen layout is " +
    screenPrice +
    " yuan, and the cost of website development is " +
    fullPrice +
    " yuan",
);
