
var i = 0;
var txt = 'University of North Alabama CIS 376 class, welcome to project 6.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}