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

   var user_clicked = false;
   var tie_game = false;

   var arrToWin = [
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
      [2, 3, 5, 7],
      [2, 4, 5 ,6],
      [2, 4, 5, 8],
      [2, 5, 8],
      [2, 5, 7 ,8],
      [3, 4, 5, 7],
      [3, 5, 6, 9],
      [3, 5, 7, 9],
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
      computer = 'X';
      $(".opening").hide();
      $(".box-tick").show();
   });
   $("#chooseX").click(function() {
      user = 'X';
      computer = 'O';
      $(".opening").hide();
      $(".box-tick").show();
   });

   function whatBox(numb) {
      if(numb == 1) {
         box1 = false;
      } else if (numb == 2) {
         box2 = false;
      } else if (numb == 3) {
         box3 = false;
      } else if (numb == 4) {
         box4 = false;
      } else if (numb == 5) {
         box5 = false;
      } else if (numb == 6) {
         box6 = false;
      } else if (numb == 7) {
         box7 = false;
      } else if (numb == 8) {
         box8 = false;
      } else {
         box9 = false;
      }
   }

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

   function canUserClick(where, box, numb) {
      if (box == true && user_clicked == false) {
         whatBox(numb);
         $(where).text(user);
         arrOfPlayer.push(numb);
         checkTieGame();
         user_clicked = true;
         compClick();
      }
   }

   function checkPlayerMove(where, numb) {
      whatBox(numb);
      setTimeout(function() {
         $(where).text(computer);
      },1000);
      user_clicked = false;

      checkArr(numb);
   }

   function compClick() {
      if (arrOfPlayer[0] == 1) {
         checkPlayerMove("#content-box5",5);
         if (arrOfPlayer[1] == 2) {
            checkPlayerMove("#content-box3",3);
            if(arrOfPlayer[2] == 4 || arrOfPlayer[2] == 6 || arrOfPlayer[2] == 9 || arrOfPlayer[2] == 8) {
               checkPlayerMove("#content-box7",7);
            } else if (arrOfPlayer[2] == 7) {
               checkPlayerMove("#content-box4",4);
               if(arrOfPlayer[3] == 8 || arrOfPlayer[3] == 9) {
                  checkPlayerMove("#content-box6",6);
               } else if (arrOfPlayer[3] == 6) {
                  checkPlayerMove("#content-box9",9);
               }
            }
         } else if (arrOfPlayer[1] == 3) {
            checkPlayerMove("#content-box2",2);
            if(arrOfPlayer[2] == 4 || arrOfPlayer[2] == 6 || arrOfPlayer[2] == 7 || arrOfPlayer[2] == 9 ) {
               checkPlayerMove("#content-box8",8);
            } else if(arrOfPlayer[2] == 8) {
               checkPlayerMove("#content-box4",4);
               if(arrOfPlayer[3] == 7 || arrOfPlayer[3] == 9) {
                  checkPlayerMove("#content-box6",6);
               } else if (arrOfPlayer[3] == 6) {
                  checkPlayerMove("#content-box9",9);
               }
            }
         } else if (arrOfPlayer[1] == 4) {
            checkPlayerMove("#content-box7",7);
            if(typeof arrOfPlayer[2] == "number" && arrOfPlayer[2] != 3) {
               checkPlayerMove("#content-box3",3);
            } else if (arrOfPlayer[2] == 3) {
               checkPlayerMove("#content-box2",2);
               if (typeof arrOfPlayer[3] == "number" && arrOfPlayer[3] != 8) {
                  checkPlayerMove("#content-box8",8);
               } else if(arrOfPlayer[3] == 8) {
                  checkPlayerMove("#content-box9",9);
               }
            }
         } else if (arrOfPlayer[1] == 6) {
            checkPlayerMove("#content-box2",2);
            if(arrOfPlayer[2] != 8 && typeof arrOfPlayer[2] == "number") {
               checkPlayerMove("#content-box8",8);
            } else if (arrOfPlayer[2] == 8) {
               checkPlayerMove("#content-box7",7);
               if(arrOfPlayer[3] != 3 && typeof arrOfPlayer[3] == "number") {
                  checkPlayerMove("#content-box3",3);
               } else if (arrOfPlayer[3] == 3) {
                  checkPlayerMove("#content-box4",4);
               }
            }
         } else if (arrOfPlayer[1] == 7) {
            checkPlayerMove("#content-box4",4);
            if (arrOfPlayer[2] != 6 && typeof arrOfPlayer[2] == "number") {
               checkPlayerMove("#content-box6",6);
            } else if (arrOfPlayer[2] == 6 ) {
               checkPlayerMove("#content-box8",8);
               if(arrOfPlayer[3] != 2 && typeof arrOfPlayer[3] == "number") {
                  checkPlayerMove("#content-box2",2);
               } else if (arrOfPlayer[3] == 2) {
                  checkPlayerMove("#content-box3",3);
               }
            }
         } else if (arrOfPlayer[1] == 8) {
            checkPlayerMove("#content-box9",9);
            if(arrOfPlayer[2] == 2) {
               checkPlayerMove("#content-box3",3);
               if(arrOfPlayer[3] != 6 && typeof arrOfPlayer[3] == "number") {
                  checkPlayerMove("#content-box6",6);
               } else if (arrOfPlayer[3] == 6) {
                  checkPlayerMove("#content-box7",7);
               }
            }
         }
      }
      setTimeout(function() {
         calculate();
      },1000)
   }

   function calculate() {
      var arrOfCompCheck = "";
      arrOfComp.sort(function(a, b) {
         return a - b;
      });
      arrOfCompCheck = JSON.stringify(arrOfComp);
      if (newArr.includes(arrOfCompCheck)) {
         setTimeout(function() {
            alert("You Lose");
            //reload page
            location.reload();
         }, 1000);
      }
   }


   $("#box1").click(function() {
      canUserClick("#content-box1", box1,1);
   });
   $("#box2").click(function() {
      canUserClick("#content-box2", box2,2);
   });
   $("#box3").click(function() {
      canUserClick("#content-box3", box3,3);
   });
   $("#box4").click(function() {
      canUserClick("#content-box4", box4,4);
   });
   $("#box5").click(function() {
      canUserClick("#content-box5", box5,5);
   });
   $("#box6").click(function() {
      canUserClick("#content-box6", box6,6);
   });
   $("#box7").click(function() {
      canUserClick("#content-box7", box7,7);
   });
   $("#box8").click(function() {
      canUserClick("#content-box8", box8,8);
   });
   $("#box9").click(function() {
      canUserClick("#content-box9", box9,9);
   });
});
