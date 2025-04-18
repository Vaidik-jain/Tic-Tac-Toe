let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".showmsg");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turno=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        } else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
     const checkwinner=()=>{
    for(let pattern of winpatterns){
        let  pos1val=boxes[pattern[0]].innerText;
        let  pos2val=boxes[pattern[1]].innerText;
        let  pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val) showwinner(pos1val);
        }
    }
};
     const showwinner=(winner)=>{
    msg.innerText=`${winner} is the winner!!`;
    msgcontainer.classList.remove("hide");
};
     const resetgame=()=>{
    turno=true;
    enableboxes ();
    msgcontainer.classList.add("hide");
};
     const enableboxes =() =>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
};
  newgamebtn.addEventListener("click",resetgame);
  resetbtn.addEventListener("click",resetgame);