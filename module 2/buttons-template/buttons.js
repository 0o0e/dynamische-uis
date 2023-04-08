const img = document.getElementById('image1');
const img2 = document.getElementById('image2');
var button1 = 0
var button2 = 0
var button3 = 0



function changeImage1(){

  img.src = 'images/bg1.jpg';
  img2.src = 'images/1.jpg';
  button1 +=1
  document.getElementById('button_1').innerHTML = button1
    
}
function changeImage2(){
  img.src = 'images/bg2.jpg';
  img2.src = 'images/2.jpg';
  button2 +=1
  document.getElementById('button_2').innerHTML = button2
}
function changeImage3(){
  img.src = 'images/bg3.jpg';
  img2.src = 'images/3.jpg';
  button3 +=1
  document.getElementById('button_3').innerHTML = button3
}

