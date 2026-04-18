let count = 0;
const displayElement = document.getElementById("counter-display");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");

addButton.addEventListener("click", function() {
    count = count + 1;
    displayElement.innerText = count;
});

subButton.addEventListener("click", function(){
    count = count - 1;
    displayElement.innerText =  count;
});