"use strict";

window.onload = function() {
  document.querySelector("header button").addEventListener("click", function() {
    console.log("chamei");
    document.querySelector(".form").classList.toggle("hide");
  });
};
