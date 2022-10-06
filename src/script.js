let btnAdd = document.querySelector("#add");
let btnSubtract = document.querySelector("#subtract");
let input = document.querySelector("input");
btnAdd.addEventListener('click',() =>{
    input.value = parseInt(input.value) +1;
});
btnSubtract.addEventListener('click',() =>{
    if(input.value<=0){
        input.value = 0;
    }else
    input.value = parseInt(input.value) -1;
    
});