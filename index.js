  
const colors = ["#6e03ba","#a25c78","#05d0ec","#2b9938","#d1e0d5","#4cefb7"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}