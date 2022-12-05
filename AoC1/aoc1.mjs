import * as fs from 'fs/promises';

async function getData(filename){
    let elves = [];
    let data = await fs.readFile(filename, 'utf8'); // reading puzzle input
    let arr = data.split('\r\n').join(",").split(',,'); //grouping puzzle input data by blank line demarcations in file
    for(let i = 0; i < arr.length; i++){
        elves.push(arr[i].split(',')); //separating lines into indiviual values
    }
    elves[elves.length - 1].pop(); //removing EOF character

    return elves;
}

function partOne(elves) {
    let cals = [];

    for(let i = 0; i < elves.length; i++){
        let elfCals = 0;
        for(let j = 0; j < elves[i].length; j++){
            elfCals += parseInt(elves[i][j]); //going through each elf's cals and adding them up, converting to int as elves contains strings
        }
        cals.push(elfCals);
    }
    return cals;
}

function partTwo(cals){
    cals.sort();
    return (cals[cals.length - 1] + cals[cals.length - 2] + cals[cals.length - 3]); //sorting in ascending order and returning the sum of the three greatest calories
}

let elves = await getData('./data.txt');
let mostCals = partOne(elves);
console.log(Math.max(...mostCals));
let topThree = partTwo(mostCals);
console.log(topThree);