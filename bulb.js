let on = document.getElementById("but-on");
let off = document.getElementById("but-off");
let image = document.getElementById("bulb");

function buttonOn() {
    image.setAttribute("src", "bulbon.png");
};
function buttonOff() {
    image.setAttribute("src", "bulboff.png");
};
on.addEventListener("click",buttonOn);
off.addEventListener("click",buttonOff);
