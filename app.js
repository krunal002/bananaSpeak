// input
let text = document.querySelector("#textInput");

let btn = document.querySelector("#btnTranslate");


function clicked(){
        outputDiv.innerHTML = "Hi i am Krunal, " + text.value;
};

// output
let outputDiv = document.querySelector(".output");
btn.addEventListener("click", clicked);