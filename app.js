var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickhandler(){
   
    outputDiv.innerText = "ahahhaha" + txtInput.value

};

btnTranslate.addEventListener("click", clickhandler);
