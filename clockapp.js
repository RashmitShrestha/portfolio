const honelm = document.getElementById("honelm");
const timeLeft = document.getElementById("timeLeft");

var work = new Audio("work.mp3");

var breakTime = new Audio("break.m4a");

document.getElementById("yeet").addEventListener("click", () => {
  var brkmin = document.getElementById("brkmin").value;
  var brksec = document.getElementById("brksec").value;
  var wrkmin = document.getElementById("wrkmin").value;
  var wrksec = document.getElementById("wrksec").value;

  if (Number(brkmin) == null) {
    brkmin = 0;
  }

  if (Number(brksec) == null) {
    brksec = 0;
  }
  if (Number(wrkmin) == null) {
    wrkmin = 0;
  }
  if (Number(wrksec) == null) {
    wrksec = 0;
  }



  (function myFunc01() {
    //YOUR TIME IN HELL HAS BEGUN
    honelm.style.color = "red";
    honelm.innerHTML = "GET WORKIN'";
work.play();
    let iWrk = Number(wrkmin * 60 + wrksec);
    let iBrk = Number(brkmin * 60 + brksec );

    // store the interval id to clear in future
    var intr = setInterval(function () {

      timeLeft.innerHTML = new Date(Math.abs(iWrk -1) * 1000).toISOString().substr(11, 8);

      if (--iWrk < 0) {
        clearInterval(intr);
        honelm.style.color = "green";
        honelm.innerHTML = "Break Time!";
        breakTime.play();

        // store the interval id to clear in future
        var intW = setInterval(function () {
          timeLeft.innerHTML = new Date(Math.abs(iBrk -1 ) * 1000).toISOString().substr(11, 8);
          if (--iBrk < 0) {
            clearInterval(intW);
            myFunc01();
          }
        }, 1000);
      }
    }, 1000);
  })();



  document.getElementById('yeet').id = 'great'; 
  document.getElementById("great").addEventListener("click", () => {
    location.reload();
    
    });


});



