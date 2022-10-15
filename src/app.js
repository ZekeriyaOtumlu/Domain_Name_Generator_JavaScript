/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let finalArray = [];

function domainExecute() {
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        // console.log(pronoun[p] + " " + adj[a] + " " + noun[n]);
        finalArray.push(pronoun[p] + "" + adj[a] + "" + noun[n] + ".com");
      }
    }
  }
  return finalArray;
}
// console.log(domainExecute().join("\n"));
document.querySelector("#page").innerHTML = domainExecute().join("\n");
