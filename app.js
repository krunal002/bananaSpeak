// input
let text = document.querySelector("#textInput");
let btn = document.querySelector("#btnTranslate");
let outputDiv = document.querySelector("#output");

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
        // outputDiv.innerText = "Hi i am Krunal, " + text.value;

        let inputText = text.value;
        console.log(getTranslatedUrl(inputText));
        fetch(getTranslatedUrl(inputText)) 
                .then(response => response.json())
                .then(json => {
                        var tranlatedText = json.contents.translated;
                        outputDiv.innerText = tranlatedText;
                        })
                .catch(errorHandler)
};

// output
btn.addEventListener("click", clicked);