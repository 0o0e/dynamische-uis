var image = document.getElementById("image");
var demo = document.getElementById("demo")
document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
var width = window.innerWidth - 100;
var height = window.innerHeight - 100;

var position = 0
var extra = 0
var marginn = 5
var leftorright = 5

function checkKey(e) {
    position = position + 164
    // console.log(marginn)
    // console.log(leftorright)
    // console.log(position)
    console.log('height = ',height)
    console.log('width = ',width)
    console.log('marginn/updown = ',marginn)
    console.log('leftorright = ',leftorright)
    console.log('position = ',position)

	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
        image.style.transform = "rotate(90deg)";
        image.style.backgroundPosition = `-${parseInt(move)}px 0px`;


    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(360deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`;
        marginn = marginn -5;
        demo.style.top = `${marginn}px`;
        if (marginn == 0){
            marginn = 575
        }

    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        marginn = marginn + 5
        image.style.transform = "rotate(180deg)"
        image.style.backgroundPosition = `-${parseInt(position)}px 0px`;
        demo.style.top =`${parseInt(marginn)}px`;
        if (marginn == 575){
            marginn = 0
        }

    } else if (e.keyCode == '37') { // left arrow
        leftorright = leftorright - 5
    	console.log("left arrow");
        image.style.transform = "rotate(-90deg)"
        image.style.backgroundPosition = `${position}px 0px`;
        image.style.left = `${leftorright}px`;
        if (leftorright == 0){
            leftorright = 1300
        };

    } else if (e.keyCode == '39') {   // right arrow
        leftorright = leftorright + 5
        image.style.transform = "rotate(90deg)";
    	console.log("right arrow");
    	image.style.backgroundPosition = `${position}px 0px`; // check goed de rupsband
        image.style.left = `${leftorright}px`;
        if (leftorright > 1299){
            leftorright = 0
        }
    
    }
    
    if (position < 1312) { 
        position = position + 256;
    } else { 
        position = 256; 
    } 



    console.log(leftorright)
}
// function animateScript() {
//     document.getElementById("image").style.backgroundPosition = 
//     `-505px 0px`;
//     }