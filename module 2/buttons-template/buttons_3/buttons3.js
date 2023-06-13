var buttonscontainer = document.getElementById("container");
buttonscontainer.className = "button_container";
buttonscontainer.style.display = "flex";
buttonscontainer.style.justifyContent = "center";
buttonscontainer.style.alignItems = "center";
buttonscontainer.style.flexWrap = "wrap";

for(var i =1; i <= 30; i++){

    var button = document.createElement("button");
    button.textContent = i;
    button.className ="button"
    buttonscontainer.appendChild(button);

    button.clickcount = 0
    

    // button.addEventListener("click", function() {
    //     this.style.backgroundColor = "red";
    // });
    button.addEventListener("click", function() {
        this.clickcount ++;
        if(this.clickcount == 1){
            this.style.backgroundColor = "red";
        }else if(this.clickcount == 2){
            this.style.backgroundColor = "purple";
        }else if(this.clickcount == 3){
            this.style.backgroundColor = "blue";
        }else if(this.clickcount ==4){
            this.style.backgroundColor = "black";
        }else if(this.clickcount ==5){
            this.remove()
        }
    
    });


    if (i % 5 === 0) {
        buttonscontainer.appendChild(document.createElement("br"));
    }
    console.log(i)
}

document.body.appendChild(buttonscontainer)

