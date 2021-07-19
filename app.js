const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});


var countDate = new Date("july 30,2021 00:00:00").getTime();
console.log(countDate);

const time = setInterval(function () {
  const now = new Date().getTime();
  const diff = countDate - now;
  console.log(diff);

  const textDay = Math.round(diff / (1000 * 60 * 60 * 24));
  const textHour = Math.round((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const textMinute = Math.round((diff % (1000 * 60 * 60)) / (1000 * 60));
  const textSecond = Math.round((diff % (1000 * 60)) / 1000);
  
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;


}, 1000)
