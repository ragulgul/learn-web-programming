alert("Hello annie");


function onClickOfABox() {

}

var currentVolume=0;

function changeVolume( changedBy ) {

    var newVolume = currentVolume + changedBy;

    currentVolume = newVolume;

    return currentVolume;
}



changeVolume(30);
alert("Curent volume is " + currentVolume);


changeVolume(-5);
alert("Curent volume is " + currentVolume);


changeVolume(-10);
alert("Curent volume is " + currentVolume);


// This is what would happen if you clicked me
// This is the reaction that Einstein talked about
function stupidBoxClicked() {
    alert("Hey, you clicked me, how dare you! Don't touch me!!");
}


// For myDarnBox1, I have married click and stupidBoxClicked
document.getElementById("myDarnBox1").addEventListener("click", stupidBoxClicked);

