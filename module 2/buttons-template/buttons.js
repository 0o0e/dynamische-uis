const img = document.getElementById('image1');
const img2 = document.getElementById('image2');

var button1 = 0
var button2 = 0
var button3 = 0



function changeImage1(clicked_id){
  img.src = 'images/bg1.jpg';
  img2.src = 'images/1.jpg';
  button1 +=1
  document.getElementById('button_1').innerHTML = button1
  if (clicked_id == 'button_1'){
    document.querySelector('#button_1').disabled = true;
    document.querySelector('#button_2').disabled = false;
    document.querySelector('#button_3').disabled = false;

    document.getElementById('button_1').style.backgroundColor='#911';
    document.getElementById('button_2').style.backgroundColor='#00cd00';
    document.getElementById('button_3').style.backgroundColor='#00cd00';

  }
}

function changeImage2(clicked_id){
  img.src = 'images/bg2.jpg';
  img2.src = 'images/2.jpg';
  button2 +=1
  document.getElementById('button_2').innerHTML = button2
  if (clicked_id == 'button_2'){
    document.querySelector('#button_1').disabled = false;
    document.querySelector('#button_2').disabled = true;
    document.querySelector('#button_3').disabled = false;

    document.getElementById('button_1').style.backgroundColor='#00cd00';
    document.getElementById('button_2').style.backgroundColor='#911';
    document.getElementById('button_3').style.backgroundColor='#00cd00';


    
  }
}

function changeImage3(clicked_id){
  img.src = 'images/bg3.jpg';
  img2.src = 'images/3.jpg';
  button3 +=1
  document.getElementById('button_3').innerHTML = button3
  if (clicked_id == 'button_3'){
    document.querySelector('#button_1').disabled = false;
    document.querySelector('#button_2').disabled = false;
    document.querySelector('#button_3').disabled = true;

    
    document.getElementById('button_1').style.backgroundColor='#00cd00';
    document.getElementById('button_2').style.backgroundColor='#00cd00';
    document.getElementById('button_3').style.backgroundColor='#911';

  }
}

