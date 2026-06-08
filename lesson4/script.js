"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;

function getTitle() {
  let trimmed = title.trim();
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

let getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice();
function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}

let servicePercentPrice = getServicePercentPrices();

function showTypeOf(value) {
  return typeof value;
}

function getRollbackMessage() {
  if (fullPrice >= 30000) {
    return "Даем скидку в 10%";
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return "Даем скидку в 5%";
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(screens);
console.log(getRollbackMessage());
console.log(getServicePercentPrices());
