var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
var position = 0
var extra = 0
var marginn = 0
function checkKey(e) {
    position = position + 164 + extra
    marginn = marginn + 2

	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        image.style.transform = "rotate(-90deg)"
        image.style.backgroundPosition = `${position}px 0px`;
    } else if (e.keyCode == '39') {   // right arrow
        image.style.transform = "rotate(90deg)"
    	console.log("right arrow");
    	image.style.backgroundPosition = `${position}px 0px`; // check goed de rupsband
        image.style.margin = `${marginn}px`
    }
    console.log(position)
    extra = extra + 2
    
}
// function animateScript() {
//     document.getElementById("image").style.backgroundPosition = 
//     `-505px 0px`;
//     }