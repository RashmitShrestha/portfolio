const honelm = document.getElementById("honelm");
const timeLeft = document.getElementById("timeLeft");

var work = new Audio("work.mp3");

var breakTime = new Audio("break.m4a");

function beRed() {
  honelm.style.color = "red";
}

function beGreen() {
  honelm.innerHTML = "BREAK TIME!";
  honelm.style.color = "green";
  breakTime.play();
}

document.getElementById("yeet").addEventListener("click", () => {
  function megFunc() {
    beRed();
    beGreen();
    setTimeout(() => {
      beRed();
      honelm.innerHTML = "BACK TO WORK!";

      work.play();
    }, totBrkTime);
  }
  beRed();

  honelm.innerHTML = "BACK TO WORK!";

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

  var totBrkTime = Number(brkmin * 60000 + brksec * 1000);
  var totWrkTime = Number(wrkmin * 60000 + wrksec * 1000);

  setTimeout(() => {
    megFunc();

    setInterval(() => {
      megFunc();
    }, totWrkTime + totBrkTime);
  }, totWrkTime);
});

function getTime(x) {
  timeLeft.innerHTML = new Date(x * 1000).toISOString().substr(11, 8);
}



















document.getElementById("yeet").addEventListener("click", () => {
  var brkmin = document.getElementById("brkmin").value;
  var brksec = document.getElementById("brksec").value;
  var wrkmin = document.getElementById("wrkmin").value;
  var wrksec = document.getElementById("wrksec").value;
  var t1;

  var totBrkTime = Number(brkmin * 60000 + brksec * 1000);
  var totWrkTime = Number(wrkmin * 60000 + wrksec * 1000);





  function timeFunc() {
 
  

start1();

    var i1 = (brkmin * 60) + brksec;
    
    function start1() {
      setInterval(increase1, 1000);
    }
    
    function increase1() {
        if (i1 > 0) {
          i1--;
          getTime(i1);
        }
    }



    setTimeout(() => {
  


        

        start2();

        var i2 = (wrkmin * 60) + wrksec;
        
        function start2() {
          setInterval(increase2, 1000);
        }
        
        function increase2() {
            if (i2 > 0) {
              i2--;
              getTime(i2);
            }
        }


    }, totBrkTime);
  }


  start2();

  var i2 = (wrkmin * 60) + wrksec;
  
  function start2() {
    setInterval(increase2, 1000);
  }
  
  function increase2() {
      if (i2 > 0) {
        i2--;
        getTime(i2);
      }
  }


  setTimeout(() => {
    timeFunc();

    setInterval(() => {
      timeFunc();
    }, totWrkTime + totBrkTime);
  }, totWrkTime);
});
