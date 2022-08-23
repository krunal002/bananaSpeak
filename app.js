// to get textarea
let text = document.querySelector("#textInput");

// to get button
let btn = document.querySelector("#btnTranslate");



btn.addEventListener("click", clicked);

function clicked(){
    console.log(text.value);
};