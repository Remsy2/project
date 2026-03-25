let title = prompt("Как называется ваш проект?");
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

let screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
console.log(screenPrice);

let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = Number(prompt("Сколько это будет стоить?"));
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = Number(prompt("Сколько это будет стоить?"));
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let percent = Number(prompt("Какой процент отката посреднику?"));
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * percent / 100);
console.log(servicePercentPrice);

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice === 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}
