"use strict";
const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Mario",
      lastName: "Santorio",
      age: 10,
    },
    {
      firstName: "Teo",
      lastName: "Lopeez",
      age: 12,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "SuperHeroes",
      teamPoints: 35,
      opponentPoints: 45,
    },
    {
      opponent: "Eagles",
      teamPoints: 51,
      opponentPoints: 42,
    },
  ],
  get players() {
    return {
      players: this._players, 
    };
  },
  get games() {
    return {
      games: this._games, 
    };
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    console.log(player);
    console.log(this._players);
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  },
};
console.log(team);

team.addPlayer("Steph", " Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team);
team.addGame("Bears", 20, 60);
team.addGame("Aliens", 55, 37);
team.addGame("Flowers", 40, 40);
console.log(team);


