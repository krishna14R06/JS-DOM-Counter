let count = 0;
const displayElement = document.getElementById("counter-display");
const addButton = document.getElementById("add-btn");
const subButton = document.getElementById("sub-btn");
const resButton = document.getElementById("res-btn");

addButton.addEventListener("click", function() {
    count = count + 1;
    displayElement.innerText = count;
});

subButton.addEventListener("click", function(){
    if (count>0) {
        count = count - 1;
        displayElement.innerText =  count;
    }
});

resButton.addEventListener("click", function(){
    count = 0;
    displayElement.innerText = count;
})