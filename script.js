'use strict';

localStorage.setItem("user1",0);
localStorage.setItem("user2",0);
let round1 = [];
let round2 = [];

var hold_user = document.getElementById('hold_user');
var current = 0;
var randnum = null;

function btn_roll(min,max) {
   var current_0 = document.getElementById('current_0');
   var current_1 = document.getElementById('current_1');
   var changeImg = document.getElementById('dice');
   var randnum = Math.floor(Math.random() * (min + max))+ min;
   changeImg.src = 'dice-'+randnum+'.png';

   if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
         localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
         localStorage.clickcount = 1;
      }
   } 

   if(document.querySelector('#user1.player--active')) {
      if(randnum == 1){         
         setTimeout(function(){  
            // alert('ROLL DICK VALUE 1==1 PIG PLAYER'); current_0.innerHTML = 0;
            current_0.innerHTML = 0;
            ChangedActive('user1','user2');
            current = 0;
            var randnum = null;       
            changeImg.src = 'dice-'+current+'.png';
         }, 100);        
         
      }else{
         current = parseInt(current_0.innerHTML) + randnum;
         current_0.innerHTML = current;
      }
   }

   if(document.querySelector('#user2.player--active')) {
         if(randnum == 1){
            setTimeout(function(){  
               // alert('ROLL DICK VALUE 1==1 PIG PLAYER');
               current_1.innerHTML = 0;
               ChangedActive('user2','user1');
               current = 0;
               var randnum = null;
               changeImg.src = 'dice-'+current+'.png';
            }, 100);  
            
         }else{
            current = parseInt(current_1.innerHTML) + randnum;
            current_1.innerHTML = current;         
         }
   } 

}


function holdUser() {
   var current_0 = document.getElementById('current_0').innerHTML;
   var current_1 = document.getElementById('current_1').innerHTML;
   let changeImg = document.getElementById('dice');
   if(current_0 != '0' || current_1 != '0'){
         if(document.querySelector('#user1.player--active')){
            ChangedActive('user1','user2');
            changeImg.src = 'dice-'+0+'.png';
            var current_0 = document.getElementById('current_0');
            var total = parseInt(localStorage.user1) + parseInt(current_0.innerHTML);
            localStorage.setItem("user1", total);
            var score = parseInt(localStorage.user1);
            round1.push(score);
            score_0.innerHTML = score;
            current_0.innerHTML = 0;
            if(score >= 100){
               var score_bord = document.getElementById('score_bord');
                  score_bord.innerHTML = `<span>WIN</span>
                           <h1 id="Win">PLAYER 1</h1>
                           <h2 id="Score"> SCORE : ${score}</h2>
                           <h3 id="TotalHold">TOTAL HOLD : ${round1.length}</h3>
                           <button class="btn" onclick="newGame()">🔄 New game</button>`;
                  score_bord.style.display = 'block';
            }            
         }
         else{
               ChangedActive('user2','user1');
               changeImg.src = 'dice-'+0+'.png';
               var current_1 = document.getElementById('current_1');
               var total = parseInt(localStorage.user2) + parseInt(current_1.innerHTML);
               localStorage.setItem("user2", total);
               var score = parseInt(localStorage.user2);
               round2.push(score);
               score_1.innerHTML = score;
               current_1.innerHTML = 0;
               if(score >= 100){
                  var score_bord = document.getElementById('score_bord');
                  score_bord.innerHTML = `<span>WIN</span>
                           <h1 id="Win">PLAYER 2</h1>
                           <h2 id="Score"> SCORE : ${score}</h2>
                           <h3 id="TotalHold">TOTAL HOLD : ${round2.length}</h3>
                           <button class="btn" onclick="newGame()">🔄 New game</button>`;
                  score_bord.style.display = 'block';
                  // alert('WIN PLAYER 2 Score:-' + score + ' And Total Hold ' + round2.length)
                  // window.location.reload();
               }
         }
   }   
}

function ChangedActive(x,y){
    var remc = document.getElementById(x);
    remc.classList.remove("player--active");
    var addc = document.getElementById(y);
    addc.classList.add("player--active");    
}

function newGame(){
   var current_0 = document.getElementById('current_0');
   var current_1 = document.getElementById('current_1');
   let s0 = document.getElementById('score_0');
   let s1 = document.getElementById('score_1');
   let score_bord = document.getElementById('score_bord');
   let changeImg = document.getElementById('dice');

   if(current_0.innerHTML != '0' || current_1.innerHTML != '0' || s0.innerHTML != '0' || s1.innerHTML != '0'){
      ChangedActive('user2','user1');
      current_0.innerHTML = 0;
      current_1.innerHTML = 0;
      s0.innerHTML = 0;
      s1.innerHTML = 0;
      localStorage.setItem("user1",0);
      localStorage.setItem("user2",0);
      round1 = [];
      round2 = [];
      changeImg.src = 'dice-'+0+'.png';
      score_bord.style.display = 'none';
   }
}


document.onkeydown = function disableF5(e){ 
   if(e.keyCode == 116 || e.keyCode == 82){
      return false;
   }
}
 