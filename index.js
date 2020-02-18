//HERO - This is a template code that will be shared by the class
//
// adds packages for superheroes and supervillains
const superheroes = require('superheroes');
const supervillains = require('supervillains');

//saves two variables of a random hero and villian
var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

//displays the hero and villain to the console
console.log(mySuperHeroName);
console.log(mySuperVillainName);

// adds package for inspiration quote and displays it
const Quote = require('inspirational-quotes');
var myQuote = Quote.getRandomQuote();
console.log(myQuote);

//adds package for thoughts and displays it
const lib = require('thoughts');
var myThoughts = lib.random();
console.log(myThoughts);

//add package for popular movies and displays it
const Movie = require('popular-movie-quotes');
var myMovie = Movie.getRandomQuote();
console.log(myMovie); 

//copy above information to a file
const fs = require("fs");
fs.writeFileSync("file1.txt", mySuperHeroName);
fs.writeFileSync("file2.txt", mySuperVillainName);
fs.writeFileSync("file3.txt", myQuote);
fs.writeFileSync("file10.txt", myMovie);