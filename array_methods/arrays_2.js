//find spiderman

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]


const findSpiderMan = superheroes.find((itmem) => itmem.name === "Spiderman"
)

console.log(findSpiderMan)

//------------------

//double values
const arrayB = [1, 2, 3]

const doubleArrayValues = arrayB.map((item) => item * 2);

console.log(doubleArrayValues)

//------------------

//check if number is bigger than 10
const arrayC = [1, 4, 3, 6, 9, 7]

const containsNumberBiggerThan10 = arrayC.some((item) => item >= 10);

console.log(containsNumberBiggerThan10)

//------------------

//check if italy is present

const arrayD = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']

const isItalyInTheGreat7 = arrayD.some((item) => item === "Italy");

console.log(isItalyInTheGreat7)

//------------------

//multiply by ten
const arrayE = [1, 4, 3, 6, 9, 7, 11]

arrayE.forEach((item) => {

    console.log(item * 10);

});

//------------------

//check if all numbers are less than 100
const arrayF = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]

const isBelow100 = arrayF.every((item) => item <= 100);

console.log(isBelow100)

//------------------

//add numbers to total
const arrayG = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

const total = arrayG.reduce((currentTotal, item) => item + currentTotal, 0);

console.log(total);


