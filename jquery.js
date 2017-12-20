$(document).ready(function() {
   var computer;
   var user;
   var box1 = true;
   var box2 = true;
   var box3 = true;
   var box4 = true;
   var box5 = true;
   var box6 = true;
   var box7 = true;
   var box8 = true;
   var box9 = true;

   var user_click;

   var arrToWin = [
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
      [3, 5, 7]
   ];
   var newArr = [];
   //convert arrToWin elements to string
   for (var i = 0; i < arrToWin.length; i++) {
      newArr.push(JSON.stringify(arrToWin[i]));
   }
   var arrOfPlayer = [];
   var arrOfComp = [];

   $(".box-tick").hide();
   $("#chooseO").click(function() {
      user = 'O';
      user_click = true;
      computer = 'X';
      $(".opening").hide();
      $(".box-tick").show();
   });
   $("#chooseX").click(function() {
      user = 'X';
      user_click = true;
      computer = 'O';
      $(".opening").hide();
      $(".box-tick").show();
   });

   function checkTieGame() {
      if (box1 == box2 == box3 == box4 == box5 == box6 == box7 == box8 == box9 == false) {
         alert("Tie Game");
      }
   }

   function checkArr(number) {
      if (!arrOfComp.includes(number)) {
         arrOfComp.push(number);
      }
   }

   function canUserClick(where, box) {
      if (box) {
         $(where).text(user);
         // checkTieGame();
      }
   }

   function checkPlayerMove(where, box, numb) {
      $(where).text(computer);
      box = false;
      checkArr(numb);
   }

   function compClick() {
      var player = arrOfPlayer[arrOfPlayer.length - 1];
      setTimeout(function() {
         if (arrOfPlayer[0] == 1) {
            checkPlayerMove("#content-box5",box5,5);
            if (player == 4) {
               checkPlayerMove("#content-box7",box7,7);
            } else if (player == 2) {
               checkPlayerMove("#content-box3",box3,3);
            } else if (player == 3 || player == 6) {
               checkPlayerMove("#content-box2",box2,2);
            } else if(arrOfPlayer[arrOfPlayer.length -2] == 3) {
               if(player == 6 || player == 7 || player == 9) {
                  checkPlayerMove("#content-box8",box8,8);
               }
            }
         }

         calculate();
      }, 1000);

   }

   function calculate() {
      var arrOfCompCheck = "";
      arrOfComp.sort(function(a, b) {
         return a - b;
      });
      arrOfCompCheck = JSON.stringify(arrOfComp);
      // alert(arrOfComp);
      if (newArr.includes(arrOfCompCheck)) {
         setTimeout(function() {
            alert("You Lose");
         }, 1000);
      }
   }


   $("#box1").click(function() {
      canUserClick("#content-box1", box1);
      box1 = false;
      arrOfPlayer.push(1);
      compClick();
   });
   $("#box2").click(function() {
      canUserClick("#content-box2", box2);
      arrOfPlayer.push(2);
      compClick();
      box2 = false;
   });
   $("#box3").click(function() {
      canUserClick("#content-box3", box3);
      arrOfPlayer.push(3);
      compClick();
      box3 = false;
   });
   $("#box4").click(function() {
      canUserClick("#content-box4", box4);
      arrOfPlayer.push(4);
      compClick();
      box4 = false;
   });
   $("#box5").click(function() {
      canUserClick("#content-box5", box5);
      arrOfPlayer.push(5);
      compClick();
      box5 = false;
   });
   $("#box6").click(function() {
      canUserClick("#content-box6", box6);
      arrOfPlayer.push(6);
      compClick();
      box6 = false;
   });
   $("#box7").click(function() {
      canUserClick("#content-box7", box7);
      arrOfPlayer.push(7);
      compClick();
      box7 = false;
   });
   $("#box8").click(function() {
      canUserClick("#content-box8", box8);
      arrOfPlayer.push(8);
      compClick();
      box8 = false;
   });
   $("#box9").click(function() {
      canUserClick("#content-box9", box9);
      arrOfPlayer.push(9);
      compClick();
      box9 = false;
   });
});
