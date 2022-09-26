/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function mentira() {
    //write your code here
    let who = [
      "The dog",
      "My grandma",
      "His turtle",
      "My bird",
      "My crazy uncle"
    ];
    let action = ["ate", "peed", "broke", "crushed", "lost"];
    let what = [
      "my homework",
      "the car",
      "the keys",
      "the contract",
      "my computer"
    ];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let text =
      who[Math.floor(Math.random() * 5)] +
      " " +
      action[Math.floor(Math.random() * 5)] +
      " " +
      what[Math.floor(Math.random() * 5)] +
      " " +
      when[Math.floor(Math.random() * 5)];
    return text;
  }
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = mentira();
  });
};
