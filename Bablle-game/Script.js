var timer = 6;
var score = 0;
var hitrn = 0;

// jis p clic kro vo element pr event
// raise hoga aur eventlistner na melnai pr event element kai parent pr lister khojega vha bhi na melnai pr parent kai parent parent pr khojega
 

function increaseScore(){
      score += 10;
      document.querySelector("#scoreval").textContent = score
}
 function getNewHit(){
      hitrn =  Math.floor(Math.random() * 10);
   document.querySelector("#hitval").textContent = hitrn


 }
 
 function makeBubble(){
      var clutter =""
   
      for(var i=1;i<=168;i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="buble">${rn}</div>`
   
   }
   document.querySelector("#pbtm").innerHTML = clutter
}
function runTimer(){
      var timerint =  setInterval(function(){
          if(timer > 0){
              timer--;
              document.querySelector("#timerval").textContent = timer;
          }else{
              clearInterval(timerint);
              document.querySelector("#pbtm").innerHTML = `<h1>Game Over ...</h1>`;
              score = 0; // Reset the score to 0
              document.querySelector("#scoreval").textContent = score; // Update the score display
          }
      },1000);
  }

// function runTimer(){
//       var timerint =  setInterval(function(){
//             if(timer > 0){
//                   timer--;
//                   document.querySelector("#timerval").textContent = timer;
//             }else{
//                clearInterval(timerint);
//                document.querySelector("#pbtm").innerHTML = `<h1>Game  Over ...<h1/>`;
//             }
           
//       },1000)
// }

document.querySelector("#pbtm")
.addEventListener("click",function(details){
     var clickednum = (Number(details.target.textContent)); 
     if(clickednum === hitrn ){
      increaseScore();
      makeBubble();
      getNewHit();
     }
   
//    alert("chal rha hai") 
})
getNewHit()
runTimer()
makeBubble()
increaseScore()

