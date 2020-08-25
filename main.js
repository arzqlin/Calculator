const numBtns = document.querySelectorAll(".numBtn");
var currentNumber = "";

numBtns.forEach(element => {
    element.addEventListener("click", storeDigit);
});

function storeDigit(e){
    console.log("calling storeDigit");
    console.log(e.target.value);
    currentNumber = currentNumber + e.target.value;
    document.getElementById("display").innerHTML = currentNumber;
}