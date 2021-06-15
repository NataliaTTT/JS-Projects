"use strict";
let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

let storyWordsArray = () => {
  return story.split(" ");
};
const storyWords = storyWordsArray();
console.log(storyWords);
console.log(storyWords.length); //188
//storyWord(story);
let betterWordsArray = () => {
  return storyWords.filter((value) => !unnecessaryWords.includes(value));
};
const betterWords = betterWordsArray();
console.log(betterWords);
console.log(betterWords.length); //182

const resultArray1 = [];
const resultArray2 = [];
const resultArray3 = [];
const overused = () => {
  for (let i = 0; i < storyWords.length; i++) {
    for (let j = 0; j < overusedWords.length; j++) {
      if (storyWords[i] === overusedWords[j]) {
        if (overusedWords[j] === "really") {
          resultArray1.push(overusedWords[j]);
        } else if (overusedWords[j] === "very") {
          resultArray2.push(overusedWords[j]);
        } else if (overusedWords[j] === "basically") {
          resultArray3.push(overusedWords[j]);
        }
      }
    }
  }

  console.log(resultArray1.length, resultArray2.length, resultArray3.length);
};
overused();
const punctuation = [".", "!"];
const numberOfSentense = () => {
  let count = 0;
  for (let i = 0; i < storyWords.length; i++) {
    for (let j = 0; j < punctuation.length; j++) {
      if (storyWords[i].includes(punctuation[j])) {
        count++;
      }
    }
  }
  return count;
};
numberOfSentense();
const sentence = numberOfSentense();
console.log(sentence);

console.log(`The word count: ${storyWords.length}.`); //The word count: 188.
console.log(`The sentence count: ${sentence}.`); //The sentence count: 12.

console.log(
  `The word "really" appears ${resultArray1.length} times, the word "very" appears ${resultArray2.length} times,the word "basically" appears ${resultArray3.length} times.`
); //The word "really" appears 2 times, the word "very" appears 5 times,the word "basically" appears 1 times.
