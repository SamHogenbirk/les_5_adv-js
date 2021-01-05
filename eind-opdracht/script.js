
//refereneces for general use
const references = {

    mainList: document.getElementById("main-list"), //Ul
    radio: document.querySelectorAll("input[name=filter]"),//radiobutton
    poster: movies.map((item) => item.Poster)//url 
}

//search function
document.getElementById("searchDb").addEventListener("keyup", (event) => {

    const find = movies.filter((item) => item.Title.toLowerCase().includes(event.target.value.toLowerCase()));
    addMovieToDOM(find)

})

//radiobutton-function
references.radio.forEach(radio => radio.addEventListener('change', function () {

    let result = this.value;
    //conditional for movie per date or per name
    const filter = (result === "newMovies") ? movies.filter((item) => item.Year <= "2014") : movies.filter((item) => item.Title.toLowerCase().includes(result));
    addMovieToDOM(filter)

}));

//adds selected movies to DOM
const addMovieToDOM = (input) => {

    //removes old movie instances
    const ulElement = references.mainList
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }

    input.forEach((item) => {

        const newLi = document.createElement("li")
        const newA = document.createElement("a")
        const newImg = document.createElement("img");

        references.mainList.appendChild(newLi)
        newLi.appendChild(newA)
        newA.appendChild(newImg)

        //concats imDB url with ID
        const url = "https://www.imdb.com/title/" + item.imdbID + "/";

        newImg.setAttribute("src", item.Poster)
        newA.setAttribute("href", url,)//sets url to imDB
        newA.setAttribute("target", "_blank") // opens new tab/window
        newImg.setAttribute("class", "grid-image")//adds classname for styling
        newLi.setAttribute("class", "grid-item")//adds classname for styling

    })
};

addMovieToDOM(movies)

































