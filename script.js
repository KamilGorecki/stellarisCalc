const links = [
  { name: "Home", src: "/" },
  { name: "Leviathan", src: "/src/leviathan.html" },
];

const header = document.querySelector("header");
const nav = document.createElement("nav");
const su = document.querySelectorAll("input");
const total = document.getElementById("su-total");
const shipTime = document.getElementById("ship-time");
const shipsTotal = document.getElementById("ships-total");

let sum = 0;
let shipSum = 0;
let ships = 0;

let boost = 0;
header.append(nav);

links.forEach((elem) => {
  const link = document.createElement("a");
  link.innerHTML = elem.name;
  link.classList.add("link");
  link.setAttribute("href", elem.src);
  nav.append(link);
});

su.forEach((elem) => {
  elem.addEventListener("change", () => count());
});

function count() {
  sum = 0;
  getAmount();
}

function getAmount() {
  const su = document.querySelectorAll("input");

  su.forEach((elem) => {
    let i = parseInt(elem.value);
    if (elem.name === "1m") {
      sum = parseInt(sum) + i;
    } else if (elem.name === "5m") {
      sum = parseInt(sum) + i * 5;
    } else if (elem.name === "15m") {
      sum = parseInt(sum) + i * 15;
    } else if (elem.name === "1h") {
      sum = parseInt(sum) + i * 60;
    } else if (elem.name === "3h") {
      sum = parseInt(sum) + i * 180;
    } else if (elem.name === "8h") {
      sum = parseInt(sum) + i * 480;
    } else if (elem.name === "1d") {
      sum = parseInt(sum) + i * 1440;
    } else if (elem.name === "3d") {
      sum = parseInt(sum) + i * 4320;
    } else if (elem.name === "shipTime") {
      shipSum = parseInt(i) * 60;
    } else if (elem.name === "boost") {
      if (i != 0) {
        boost = 1 - parseInt(i) / 100;
      }
    }
  });

  if (boost > 0 && boost < 1) {
    console.log(boost);
    shipSum = shipSum * boost;
    ships = sum / shipSum;
  }
  ships = sum / shipSum;
  shipsTotal.innerHTML = Math.floor(ships);
  total.innerHTML = convertToDays(sum);
}

function convertToDays(num) {
  d = Math.floor(num / 1440);
  h = Math.floor((num - d * 1440) / 60);
  m = Math.round(num % 60);

  if (d > 0) {
    return d + " days, " + h + " hours, " + m + " minutes";
  } else {
    return h + " hours, " + m + " minutes";
  }
}
