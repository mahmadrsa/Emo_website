let chid = document.querySelector("body")
let arrA = []
let arrN = []
for (let i = 2; i < 19; i++) {
  if(chid.children[i].className == "spikes")
    continue;
  arrA.push(chid.children[i].offsetTop)
  arrN.push(chid.children[i].className)
} 

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counr = setInterval(()=>{

  let dateNow = new Date().getTime();
  let def = countDownDate - dateNow;
  
  let days = Math.floor(def / (1000 * 60 * 60 * 24));
  let hours = Math.floor(def % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(def % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(def % (1000 * 60) / (1000));

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (def < 0) {
    clearInterval(counr);
  }
},1000)

let sectionSK = document.querySelector(".our-skills");
let spanPR = document.querySelectorAll(".the-progress span");

let sectionST = document.querySelector(".stats");
let spanST = document.querySelectorAll(".stats .number");
let started = false;

function cont (el) {
  let goal = el.dataset.goal
  let counter = setInterval(()=>{
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(counter);
      }
  }, 2000 / goal)
}

window.onscroll = () => {
  spaceName(Math.floor(window.scrollY));
      if(window.scrollY >= sectionSK.offsetTop - 250){
        spanPR.forEach((span) => {
          span.style.width = span.dataset.width;
        })
      }
      if(window.scrollY >= sectionST.offsetTop - 200){
        if(!started)
        spanST.forEach((span) => cont(span));
      started = true;
    } 
}

let pag = document.querySelector(".desc p span")

function spaceName(sqNow) {
  for (let i = 0; i < arrA.length; i++) {
    if (sqNow >= arrA[i]) {
      pag.innerHTML = `${arrN[i]} - part`;
    }
  }
  
}
