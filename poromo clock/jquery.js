$(document).ready(function() {
  var clock;
  var isRunning = false;
  var runBreakTime = false;
  var breakCount = 1;
  var minuteInl = 1;
  var second = 60;
  var minuteCount = minuteInl;
  // $("#minutes").text("2 x5");
  $("#minutes").text(minuteInl);

  $(".circle").click(function(){
    if (isRunning) {
      isRunning = false;
      clearInterval(clock);
      minuteCount++;
    } else {
      isRunning = true;
      minuteCount--;
      clock = setInterval(function() {
        if(runBreakTime) {
          $("#runningSession").text("Break");
        } else {
          $("#runningSession").text("Session");
        }
        // $("#runningSession").text(titleName);
        countTime();
      },100);
    }

  });

  $("#timeSessionPlus").click(function() {
    isRunning = false;
    clearInterval(clock);
    minuteInl++;
    minuteCount = minuteInl;
    second = 60;
    $("#timeSession").text(minuteInl);
    $("#seconds").text(0);
    $("#minutes").text(minuteInl);
  });

  $("#timeSessionMinus").click(function() {
    if(minuteInl > 1) {
      isRunning = false;
      clearInterval(clock);
      minuteInl--;
      minuteCount = minuteInl;
      second = 60;
      $("#timeSession").text(minuteInl);
      $("#seconds").text(0);
      $("#minutes").text(minuteInl);
    }
  });

  $("#timeBreakPlus").click(function() {
    if(!isRunning) {
      clearInterval(clock);
      minuteCount = minuteInl;
      second = 60;
      breakCount++;
      $("#runningSession").text("Session");
      $("#timeBreak").text(breakCount);
      $("#seconds").text(0);
      $("#minutes").text(minuteInl);
    }
  });

  $("#timeBreakMinus").click(function() {
    if(!isRunning && breakCount > 1) {
      clearInterval(clock);
      minuteCount = minuteInl;
      second = 60;
      breakCount--;
      $("#runningSession").text("Session");
      $("#timeBreak").text(breakCount);
      $("#seconds").text(0);
      $("#minutes").text(minuteInl);
    }
  });

  function countTime() {
    if (second > 0) {
      second--;
      $("#minutes").text(minuteCount);
      $("#seconds").text(second);
    } else if (minuteCount > 0 && second == 0) {
      minuteCount--;
      second = 60;
    } else if (minuteCount > 0 && second > 0) {
      second--;
      $("#minutes").text(minuteCount);
      $("#seconds").text(second);
    } else if (minuteCount == 0 && second == 0) {

      if (!runBreakTime) {
        // $("#runningSession").text("Break");
        runBreakTime = true;
        minuteCount = breakCount - 1;
        second = 60;
      } else {
        // $("#runningSession").text("Session");
        runBreakTime = false;
        minuteCount = minuteInl - 1;
        second = 60;
      }
    }
  }


});
