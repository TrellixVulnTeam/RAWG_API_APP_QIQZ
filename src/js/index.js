import 'bootstrap';
import '../sass/style.scss';

import { routes } from './routes'

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

let button = document.querySelector(".loop")
let input = document.querySelector("input")
button.addEventListener('click', () =>{
  let url = "#pagelist/" + input.value
  window.location = url
  console.log(input.value)
})

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

