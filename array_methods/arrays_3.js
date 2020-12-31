const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];

const superNames = superheroes.map((item) => item.name);
console.log(superNames);

//-----------------

const superWeight = superheroes.filter((item) => item.weight < 190);
console.log(superWeight);

//-----------------

const superCombo = superheroes.filter((item1) => item1.weight === "200").map((item2) => item2.name);
console.log(superCombo)

//-----------------

const firstAppearance = superheroes.map((item) => item.first_appearance);
console.log(firstAppearance);

//-----------------


console.log(superheroes.filter((item) => item.publisher === "DC Comics").map((item1) => item1.name))
console.log(superheroes.filter((item) => item.publisher === "Marvel Comics").map((item2) => item2.name))

//-----------------

//print total weight of DC heroes
const totalWeightDC = superheroes.filter((item) => item.publisher === "DC Comics").map((item) => {

    let result = parseInt(item.weight);
    return result

}).reduce((currenttotal, item) => item + currenttotal, 0);

console.log(totalWeightDC);

//-----------------

//print total weight of marvel heroes
const totalWeightMarvel = superheroes.filter((item) => {

    return item.publisher === "Marvel Comics"
}).map((item) => {
    return parseInt(item.weight);
}).filter((item) => {
    return item == item
}).reduce((current, item) => {
    return item + current
}, 0);

console.log(totalWeightMarvel);

//-----------------

//print heaviest hero
const heavieHero = superheroes.map((item) => parseInt(item.weight)).filter((item) => item == item).reduce((currentNumber, item) => {

    return Math.max(currentNumber, item);

}, 0);

console.log(heavieHero);
