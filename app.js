const btnTranslate = document.querySelector("#translate-button");
const inputTxt = document.querySelector("#input-txt");
const outputDiv = document.querySelector("#output-div");

var url="https://api.funtranslations.com/translate/minion.json";

function constructUrl(text)
{
    return url + "?" + "text=" + inputTxt.value;
}
function handleError(error) {
    console.log("error occured", error);
    outputDiv.innerText = ("Servers are busy at the moment! maybe try later")
}
btnTranslate.addEventListener("click", function clickHandler(){

    var txtInput = inputTxt.value;
    
    fetch(constructUrl (txtInput))
    .then(response => response.json())
    .then(json => {
        var finalTranslation = json.contents.translated;
        outputDiv.innerText = finalTranslation;
    })
    
    .catch(handleError)
})

