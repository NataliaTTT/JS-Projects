"use strict";
const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
    /*
    set appetizers(appetizer) {
      this._appetizers = appetizer;
    },
    set mains(main) {
      this._mains = main;
    },
    set desserts(dessert) {
      this._desserts = dessert;
    },
    */
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    console.log(dishes);
    const dishesNum = Math.floor(Math.random() * dishes.length);
    console.log(dishesNum);
    console.log(dishes[dishesNum]);
    return dishes[dishesNum];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    console.log(
      `Your meal will consist of ${appetizer.name} for an appetizer, ${main.name} as the entree, and ${dessert.name} for dessert. The total price for this meal will be ${totalPrice}$.`
    );
  },
};

menu.addDishToCourse("appetizers", "Fish and chips", 15);
menu.addDishToCourse("appetizers", "Grilled Tomato-Peach Pizza", 10);
menu.addDishToCourse("appetizers", "Fried Prosciutto Tortellini", 10);

menu.addDishToCourse("mains", "Cardamom Maple Salmon", 35);
menu.addDishToCourse("mains", "Burmese Chicken Curry", 27);
menu.addDishToCourse("mains", "Low Carb Turkey-Stuffed Peppers", 22);

menu.addDishToCourse("desserts", "Tiramisu", 11);
menu.addDishToCourse("desserts", "Chocolate mousse", 9);
menu.addDishToCourse("desserts", "Ice-cream", 8);
const meal = menu.generateRandomMeal();
