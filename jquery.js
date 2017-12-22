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
      [1, 3, 5, 9],
      [1, 4, 7],
      [1, 5, 9],
      [2, 3, 5, 7],
      [2, 4, 5 ,6],
      [2, 4, 5, 8],
      [2, 5, 8],
      [2, 5, 7 ,8],
      [3, 4, 5, 7],
      [3, 5, 6, 7],
      [3, 5, 6, 9],
      [3, 5, 7, 8],
      [3, 5, 7, 9],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
      [3, 5, 7],
      [3, 4, 5, 6],
      [3, 6, 8, 9],
      [3, 7, 8, 9],
      [1, 4, 5, 6],
      [1, 5, 7, 9],
      [1, 4, 5, 9],
      [2, 5, 6, 8]
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

   function checkPlayerMove(numb) {
      var where;
      whatBox(numb);
      if(numb == 1) {
         where = "#content-box1";
      } else if (numb == 2) {
         where = "#content-box2";
      } else if (numb == 3) {
         where = "#content-box3";
      } else if (numb == 4) {
         where = "#content-box4";
      } else if (numb == 5) {
         where = "#content-box5";
      } else if (numb == 6) {
         where = "#content-box6";
      } else if (numb == 7) {
         where = "#content-box7";
      } else if (numb == 8) {
         where = "#content-box8";
      } else if (numb == 9) {
         where = "#content-box9";
      }
      setTimeout(function() {
         $(where).text(computer);
      },1000);
      user_clicked = false;
      if (!arrOfComp.includes(numb)) {
         arrOfComp.push(numb);
      }
   }

   function compClick() {
      if (arrOfPlayer[0] == 1) {
         checkPlayerMove(5);
         if (arrOfPlayer[1] == 2) {
            checkPlayerMove(3);
            findMove(7,4,6,9);
         } else if (arrOfPlayer[1] == 3) {
            checkPlayerMove(2);
            findMove(8,4,6,9);
         } else if (arrOfPlayer[1] == 4) {
            checkPlayerMove(7);
            findMove(3,2,8,9);
         } else if (arrOfPlayer[1] == 6) {
            checkPlayerMove(2);
            findMove(8,7,3,4);
         } else if (arrOfPlayer[1] == 7) {
            checkPlayerMove(4);
            findMove(6,8,2,3);
         } else if (arrOfPlayer[1] == 8) {
            checkPlayerMove(4);
            findMove(6,3,7,9);
         } else if (arrOfPlayer[1] == 9) {
            checkPlayerMove(8);
            findMove(2,3,7,4);
         }
      } else if (arrOfPlayer[0] == 2) {
         checkPlayerMove(5);
         if(arrOfPlayer[1] == 1) {
            checkPlayerMove(3);
            findMove(7,4,6,8);
         } else if (arrOfPlayer[1] == 3) {
            checkPlayerMove(1);
            findMove(9,6,4,8);
         } else if (arrOfPlayer[1] == 4) {
            checkPlayerMove(7);
            findMove(3,1,9,6);
         } else if (arrOfPlayer[1] == 6) {
            checkPlayerMove(9);
            findMove(1,3,7,4);
         } else if (arrOfPlayer[1] == 7) {
            checkPlayerMove(1);
            findMove(9,8,3,4);
         } else if (arrOfPlayer[1] == 8) {
            checkPlayerMove(3);
            findMove(7,9,1,6);
         } else if (arrOfPlayer[1] == 9) {
            checkPlayerMove(3);
            findMove(7,8,4,6);
         }
      } else if (arrOfPlayer[0] == 3) {
         checkPlayerMove(5);
         if (arrOfPlayer[1] == 1) {
            checkPlayerMove(2);
            findMove(8,4,6,9);
         } else if (arrOfPlayer[1] == 2) {
            checkPlayerMove(1);
            findMove(9,6,4,8);
         } else if (arrOfPlayer[1] == 4) {
            checkPlayerMove(1);
            findMove(9,6,2,7);
         } else if (arrOfPlayer[1] == 6) {
            checkPlayerMove(9);
            findMove(1,2,8,4);
         } else if (arrOfPlayer[1] == 7) {
            checkPlayerMove(4);
            findMove(6,9,1,2);
         } else if (arrOfPlayer[1] == 8) {
            checkPlayerMove(9);
            findMove(1,2,4,7);
         } else if (arrOfPlayer[1] == 9) {
            checkPlayerMove(6);
            findMove(4,2,8,7);
         }
      } else if (arrOfPlayer[0] == 4) {
         checkPlayerMove(5);
         if (arrOfPlayer[1] == 1) {
            checkPlayerMove(7);
            findMove(3,2,8,6);
         } else if (arrOfPlayer[1] == 2) {
            checkPlayerMove(7);
            findMove(3,1,9,6);
         } else if (arrOfPlayer[1] == 3) {
            checkPlayerMove(1);
            findMove(9,6,2,7);
         } else if (arrOfPlayer[1] == 6) {
            checkPlayerMove(7);
            findMove(3,9,1,8);
         } else if (arrOfPlayer[1] == 7) {
            checkPlayerMove(1);
            findMove(9,8,2,6);
         } else if (arrOfPlayer[1] == 8) {
            checkPlayerMove(1);
            findMove(9,7,3,6);
         } else if (arrOfPlayer[1] == 9) {
            checkPlayerMove(7);
            findMove(3,6,1,2);
         }
      } else if (arrOfPlayer[0] == 5) {
         checkPlayerMove(1);
         if (arrOfPlayer[1] == 2) {
            checkPlayerMove(8);
         }
      }
      setTimeout(function() {
         calculate();
      },1000)
   }

   function findMove(n1,n2,n3,n4) {
      if (arrOfPlayer[2] != n1 && typeof arrOfPlayer[2] == "number") {
         checkPlayerMove(n1);
      } else if (arrOfPlayer[2] == n1) {
         checkPlayerMove(n2);
         if(arrOfPlayer[3] != n3 && typeof arrOfPlayer[3] == "number") {
            checkPlayerMove(n3);
         } else if (arrOfPlayer[3] == n3) {
            checkPlayerMove(n4);
         }
      }

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
