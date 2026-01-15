let input = document.getElementById("data");

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
