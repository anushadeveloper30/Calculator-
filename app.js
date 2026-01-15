let input = document.getElementById("data");
let sound = new Audio('sound.mp3');
let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click' , ()=>{
       sound.currentTime = 0;
       sound.play();
    });
}

function clearValue(){
    input.value="";
}

function addValue(value){
    input.value+=value
}

function result(){
    try{
        input.value = eval(input.value);
    }
    catch{
        input.value="Error"
    }
}
