//add cool to array

const array = ["nice", "awesome", "tof"]

const addTheWordCool = (array) => {

    array.push("cool");
    return array;
}
console.log(addTheWordCool(array))

//--------------------

//amount of items in array
const array2 = ['appels', 'peren', 'citroenen']

const amountOfElementsInArray = () => array2.length

console.log(amountOfElementsInArray());

//--------------------

//selct first entry
array3 = (["Belgie", "Nederland", "Luxemburg"]);

const selectBelgiumFromBenelux = () => array3[0];

console.log(selectBelgiumFromBenelux());

//-------------------

const array4 = ["Haas", "Cavia", "Kip", "Schildpad"];

let lastElementInArray = () => array4.slice(-1)

console.log(lastElementInArray());

//-------------------

//print array minus first entry.
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (input) {

    input = presidents.slice(1)
    return input

}
const impeachTrumpSplice = function (input) {

    input = presidents.splice(1)
    return input

}

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

//-------------------

//join array
const array5 = ['Winc', 'Academy', 'is', 'leuk', ';-}']

const stringsTogether = () => array5.join(" ");

console.log(stringsTogether());

//-------------------

const array6 = [1, 2, 3];
const array7 = [4, 5, 6];

const combineArrays = () => array6.concat(array7);

console.log(combineArrays())


