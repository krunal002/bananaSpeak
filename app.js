// input
let text = document.querySelector("#textInput");

let btn = document.querySelector("#btnTranslate");

// URL
let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text){
        return serverURL + "?" + "text=" + text;
}

// errorHandler
function errorHandler(error){
        alert("Something wrong with server! Try again after some time")
}

function clicked(){
        // outputDiv.innerHTML = "Hi i am Krunal, " + text.value;

        let inputText = text.value;

        fetch(getTranslatedUrl(inputText)) 
        .then(response => response.json())
        .then(json => outputDiv.innerHTML = json.contents.translated)
        .catch(errorHandler)
};

// output
let outputDiv = document.querySelector(".output");
btn.addEventListener("click", clicked);