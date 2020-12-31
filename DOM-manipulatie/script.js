//fetch te buttons from HTML
const buttons = document.getElementsByClassName("big-five-button")

//convert html colection to array (for some reason)
Array.from(buttons).forEach((button) => {

    //add event listener to teh buttons
    button.addEventListener('click', () => {

        //get button-name 
        addAnimals(button.innerHTML)
    })
});

//create new li with button-name and add to list
const addAnimals = (buttonName) => {

    const newLi = document.createElement("li")
    newLi.innerHTML = buttonName
    const parent = document.getElementById("spotted-animals-list")
    parent.appendChild(newLi);

}









