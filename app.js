let usermode = [];
let compmode = [];
let level = 0;
let start = false;
let p = document.querySelector('p');
let btns=['green','yellow','blue','red'];
// GAME START
document.addEventListener('keypress', function() {
    if (!start) {
        console.log('Game Started');
        start = true;
        levelUp();
    }
});

function levelUp() {
    usermode=[]
    level++;
    p.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * btns.length);
    let chosenColor = btns[randomIndex];

    let chosenBtn = document.querySelector(`.${chosenColor}`);
    compmode.push(chosenColor);
    console.log(compmode);
    flashBtn(chosenBtn);
}


function flashBtn(btn)
{
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
} 

function userflash(btn)
{
    btn.classList.add('gree');
    setTimeout(function(){
        btn.classList.remove('gree');
    },250);
}
let all_btn=document.querySelectorAll('.box');
all_btn.forEach(element => {
    element.addEventListener('click',btnpress);
});

function checkans(indx)
{
    if(usermode[indx]==compmode[indx])
    {
       if (usermode.length==compmode.length) {
        setTimeout( levelUp,1000);
       }
    } else{
        p.innerText="Game Over! press any key to restart";
    }
}

function btnpress()
{
    let btn=this;
    let color=btn.getAttribute('id');
    usermode.push(color);
    console.log(usermode);
    checkans(usermode.length-1);
    userflash(btn);
}



