const links = [
  { name: "Home", src: "/" },
  { name: "SUCalc", src: "/src/speedups.html" },
];

const speedUps = [1, 5, 15, 60, 180, 480, 1440, 4320];

const header = document.querySelector("header");
const nav = document.createElement("nav");
const su = document.querySelectorAll("input");
const total = document.getElementById("su-total");

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

// Priapus sucks balls hard, thats why he is so salty.

// And for his son .... no more IF statment. Sorry Mr Senior Dev.

function getAmount() {
  su.forEach((element, i) => {
    sum = parseInt(sum) + parseInt(element.value) * speedUps[i];
  });
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
