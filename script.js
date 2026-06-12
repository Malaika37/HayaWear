const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
 if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
 }

  if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
 } 

// Small Image Slider

let MainImg = document.getElementById("MainImage"); 
let smallimg = document.getElementsByClassName("small-img");

Array.from(smallimg).forEach((img) => {
    img.onclick = function() {
        MainImg.src = img.src;
    };
});
 
 