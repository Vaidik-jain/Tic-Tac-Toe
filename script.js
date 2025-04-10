  let boxes = document.querySelectorAll(".box");
  let turnO = true;
  let msgcontainer = document.querySelector(".msg-container");
  let msg=document.querySelector("#msg")
  const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,5,9],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
  ];
  const showwinner=(winner)=>{
     msg.innerHTML=`winner is ${winner}`;
     msgcontainer.classList.remove(".hide");
  }
  const checkWinner = ()=>{
       for (const pattern of winpattern) {
         let pos1val=boxes[pattern[1]].innerText;
         let pos2val=boxes[pattern[2]].innerText;
         let pos3val=boxes[pattern[3]].innerHTML;
         if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                showwinner(pos1val);
            }
         }
       }
 };
  boxes.forEach((box)=>{
       box.addEventListener("click",()=>{
         if(turnO){
            box.innerText="O";
            turnO=false
         }else{
            box.innerText="X";
            turnO=true;
         }
         box.disabled=true;
         checkWinner();
       })
       
  })
   