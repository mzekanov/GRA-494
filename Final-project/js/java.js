/*hamburger*/
const hamburger = document.querySelector(".hamburger");
const navUnorder = document.querySelector(".navbar_unorder");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUnorder.classList.toggle("active");
})

document.querySelectorAll(".navbar_items").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navUnorder.classList.remove("active");
  }))



/*Banner*/

ImageSwitch=new Array();
ImageSwitch[0]='pink.jpg';
ImageSwitch[1]='pink.png';
ImageSwitch[2]='ash.jpg';
ImageSwitch[3]='purple.jpg';

function swapImage() 
{
    document.getElementById("img").setAttribute("src", ImageSwitch[

Math.round(Math.random()*3)])
}

/*var images = [
  'pink.jpg',
  'pink.png',
  'ash.jpg',
  'purple.jpg',

];

var img = document.getElementById("img");

function imgDisp(num) {
  var num = Math.floor(Math.random() * 6);
  img.style.backgroundImage = 'url("' + images[num] +'")';
  img.style.backgroundRepeat = "no-repeat";

  imgDisp();
}


/*contact Form*/

$("#Form").submit(function(e) {
  e.preventDefault();
});



function displayText(){

var text = document.getElementById("fname").value;


var output = document.getElementById("first-name");
output.innerHTML = text;




var text2 = document.getElementById("lname").value;


var output2 = document.getElementById("last-name");
output2.innerHTML = text2;




var text3 = document.getElementById("social").value;


var output3 = document.getElementById("message-content");
output3.innerHTML = text3;


}

