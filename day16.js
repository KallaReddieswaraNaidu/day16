var timeleft = 10;


setTimeout(setInterval(function(){
    if(timeleft <= 0){
      document.getElementById("countdown").innerHTML = "Happy Indipendence Day";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
  }, 1000),1000)