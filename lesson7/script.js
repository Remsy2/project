"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: 0,
  service2: 0,

  asking: function () {
    this.title = prompt("What is the name of your project?", "Calculator");
    this.screens = prompt(
      "What types of screens need to be developed?",
      "Simple, Hard",
    );

    do {
      this.screenPrice = +prompt("How much will this work cost?");
    } while (!this.isNumber(this.screenPrice));

    do {
      this.service1 = +prompt("How much will the first service cost?");
    } while (!this.isNumber(this.service1));

    do {
      this.service2 = +prompt("How much will the second service cost?");
    } while (!this.isNumber(this.service2));

    this.adaptive = confirm("Does the website need to be adaptive?");
  },

  isNumber: function (num) {
    return !isNaN(num) && num > 0;
  },

  getTitle: function () {
    if (!this.title || !this.title.trim()) {
      return "";
    }

    const name = this.title.trim();
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  },

  getAllServicePrices: function () {
    return this.service1 + this.service2;
  },

  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  getDiscountPercent: function (price) {
    if (price >= 30000) {
      return 10;
    } else if (price >= 15000) {
      return 5;
    }
    return 0;
  },

  getServicePercentPrice: function () {
    const discountPercent = this.getDiscountPercent(this.fullPrice);
    return this.fullPrice - this.fullPrice * (discountPercent / 100);
  },

  logger: function () {
    console.log("Project title:", this.title);
    console.log("Screen types:", this.screens);
    console.log("Screen price:", this.screenPrice);
    console.log("Adaptive needed:", this.adaptive);
    console.log("All service prices:", this.allServicePrices);
    console.log("Full price:", this.fullPrice);
    console.log("Price with discount:", this.servicePercentPrice);

    for (const key in this) {
      console.log(`Property "${key}":`, this[key]);
    }
  },

  start: function () {
    this.asking();

    this.title = this.getTitle();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.servicePercentPrice = this.getServicePercentPrice();

    this.logger();
  },
};

appData.start();
