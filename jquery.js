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
   var tie_game = false;

   var arrToWin = [
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
      [3, 5, 7],
      [3, 4, 5, 6]
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
      if(arrOfPlayer.length == 5) {
         setTimeout(function() {
            alert("Draw");
            location.reload();
         },500);
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
         checkTieGame();
      }
   }

   function checkPlayerMove(where, numb) {
      $(where).text(computer);
      box = false;
      checkArr(numb);
   }

   function compClick() {
      var player = arrOfPlayer[arrOfPlayer.length - 1];
      setTimeout(function() {
         if (arrOfPlayer[0] == 1) {
            checkPlayerMove("#content-box5",5);
            box5 = false;
            if (arrOfPlayer[1] == 2) {
               checkPlayerMove("#content-box3",3);
               box3 = false;
               if(arrOfPlayer[2] == 4 || arrOfPlayer[2] == 6 || arrOfPlayer[2] == 9 || arrOfPlayer[2] == 8) {
                  checkPlayerMove("#content-box7",7);
                  box7 = false;
               } else if (arrOfPlayer[2] == 7) {
                  checkPlayerMove("#content-box4",4);
                  box4 = false;
                  if(arrOfPlayer[3] == 8 || arrOfPlayer[3] == 9) {
                     checkPlayerMove("#content-box6",6);
                     box6 = false;
                  } else if (arrOfPlayer[3] == 6) {
                     checkPlayerMove("#content-box9",9);
                     box9 = false;
                  }
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
            //reload page
            location.reload();
         }, 1000);
      }
   }


   $("#box1").click(function() {
      arrOfPlayer.push(1);
      canUserClick("#content-box1", box1);
      box1 = false;
      
      compClick();
   });
   $("#box2").click(function() {
      arrOfPlayer.push(2);
      canUserClick("#content-box2", box2);
      
      compClick();
      box2 = false;
   });
   $("#box3").click(function() {
      arrOfPlayer.push(3);
      canUserClick("#content-box3", box3);
      
      compClick();
      box3 = false;
   });
   $("#box4").click(function() {
      arrOfPlayer.push(4);
      canUserClick("#content-box4", box4);
      
      compClick();
      box4 = false;
   });
   $("#box5").click(function() {
      arrOfPlayer.push(5);
      canUserClick("#content-box5", box5);
      
      compClick();
      box5 = false;
   });
   $("#box6").click(function() {
      arrOfPlayer.push(6);
      canUserClick("#content-box6", box6);
      
      compClick();
      box6 = false;
   });
   $("#box7").click(function() {
      arrOfPlayer.push(7);
      canUserClick("#content-box7", box7);
      
      compClick();
      box7 = false;
   });
   $("#box8").click(function() {
      arrOfPlayer.push(8);
      canUserClick("#content-box8", box8);
      
      compClick();
      box8 = false;
   });
   $("#box9").click(function() {
      arrOfPlayer.push(9);
      canUserClick("#content-box9", box9);
      
      compClick();
      box9 = false;
   });
});
