//fetch te buttons from HTML
const animalButtons = document.getElementsByClassName("big-five-button")
const removeFirst = document.getElementById("remove-first-item-button")
const removeAllAnimal = document.getElementById("remove-all-button")
const parentUl = document.getElementById("spotted-animals-list")


//convert html colection to array (for some reason)
Array.from(animalButtons).forEach((button) => {

    //add event listener to the buttons
    button.addEventListener('click', () => {

        //get button-name 
        addAnimals(button.innerHTML)
    })
});

//create new li with button-name and add to list
const addAnimals = (buttonName) => {

    const newLi = document.createElement("li")
    newLi.innerHTML = buttonName
    parentUl.appendChild(newLi);
};

//remove first animal on the list
removeFirst.addEventListener('click', () => {

    parentUl.removeChild(parentUl.getElementsByTagName("li")[0])
});

//removes all li's
removeAllAnimal.addEventListener('click', () => {

    parentUl.querySelectorAll("*").forEach(item => item.remove())
});











