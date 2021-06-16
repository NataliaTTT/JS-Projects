"use strict";
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    //this._isCheckedOut = !this._isCheckedOut;
    if (this._isCheckedOut === false) {
      return (this._isCheckedOut = true);
    } else if (this._isCheckedOut === true) {
      return (this._isCheckedOut = false);
    }
  }

  addRating(ratings) {
    this._ratings.push(ratings);
  }
  getAverageRating() {
    return (
      Math.floor(
        (this.ratings.reduce((a, b) => a + b) / this._ratings.length) * 100
      ) / 100
    );
  }
  set isCheckedOut(isCheckedOuts) {
    this._isCheckedOut = isCheckedOuts;
  }
}
class Books extends Media {
  constructor(title, athor, pages) {
    super(title);
    this._athor = athor;
    this._pages = pages;
  }
  get athor() {
    return this._athor;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtimes() {
    return this._runtime;
  }
}
const historyOfEverything = new Books(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(9);
//historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);
console.log(historyOfEverything._ratings);
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed._isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
