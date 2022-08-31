var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){

    return serverURL + "?" + "text=" + text

}

function errorHandler(error){
    console.log("error occured",error)
    alert("something went wrong the server please after some time ")

}



function clickhandler(){
    // outputDiv.innerText = "ahahhaha" + txtInput.value

    var inputText = txtInput.value;
    
    
    fetch( getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
    
    };


btnTranslate.addEventListener("click", clickhandler);
