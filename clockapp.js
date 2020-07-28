const honelm = document.getElementById("honelm");
var work = new Audio('work.mp3');


var breakTime = new Audio('break.m4a');

function beRed() {

    honelm.style.color = "red";


}

function beGreen() {
    honelm.innerHTML = "BREAK TIME!"
    honelm.style.color = "green";
    breakTime.play();

}


function megFunc() {
    beRed();
    beGreen();
    setTimeout( () =>{beRed();
        honelm.innerHTML = "BACK TO WORK!"

        work.play();
    }, 5000);
    
}

document.getElementById("yeet").addEventListener("click",   () => {
beRed();
honelm.innerHTML = "BACK TO WORK!";

    setInterval(() => {

    megFunc()

},15000)

  


}        )


