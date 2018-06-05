function fight1(){
    document.getElementById("text").innerHTML = "I'm right";
}

function fight2(){
    document.getElementById("text").innerHTML = "No, I'm right!";
}

function hover(){
    alert("Hey, I told you not to hover over me!");
}

function getVolume(){
    var radius = document.getElementById("radius").value;
    alert("The volume is " + ( (4/3) * Math.PI * radius * radius *radius));
}