const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

const navbar = document.getElementById("nav");


window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
 
});
// var countDate = new Date("july 30,2021 00:00:00").getTime();
// console.log(countDate);

// const time = setInterval(function () {
//   const now = new Date().getTime();
//   const diff = countDate - now;
//   console.log(diff);

//   const textDay = Math.round(diff / (1000 * 60 * 60 * 24));
//   const textHour = Math.round((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const textMinute = Math.round((diff % (1000 * 60 * 60)) / (1000 * 60));
//   const textSecond = Math.round((diff % (1000 * 60)) / 1000);
  
//   document.querySelector(".day").innerText = textDay;
//   document.querySelector(".hour").innerText = textHour;
//   document.querySelector(".minute").innerText = textMinute;
//   document.querySelector(".second").innerText = textSecond;


// }, 1000);
function myFunction(){

  // Set the date we're counting down to
  
  var endDate= document.querySelector("#end_date").value;
  var startDate = document.querySelector("#start_date").value;
  
  if(startDate == '' || endDate == ''){
  return
  }
  
   endDate = new Date(endDate);
   startDate = new Date(startDate);
  var distance = endDate - startDate;
  


  const time = setInterval(function(){
      const textDay = Math.round(distance / (1000 * 60 * 60 * 24));
      const textHour = Math.round((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const textMinute = Math.round((distance % (1000 * 60 * 60)) / (1000 * 60));
      const textSecond = Math.round((distance % (1000 * 60)) / 1000);
      
      document.querySelector(".day").innerText = textDay;
      document.querySelector(".hour").innerText = textHour;
      document.querySelector(".minute").innerText = textMinute;
      document.querySelector(".second").innerText = textSecond;


      distance = distance - 1000;
      console.dir(distance);

      if (distance < 0) {
    clearInterval(time);
    document.querySelector(".demo").innerHTML = "EXPIRED";
  }
   if (textMinute == 20) {
    document.querySelector(".demo").innerHTML = "Your Heart rate and blood pressure will drop";}

  },1000);

}

