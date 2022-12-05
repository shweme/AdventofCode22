import * as fs from 'fs/promises';

async function getData(filename){
    let rucksacks = [];
    let data = await fs.readFile(filename, 'utf8'); // reading puzzle input
    rucksacks = data.split('\r\n'); //grouping puzzle input data by lines
    return rucksacks;
}

function partOne(rucksacks){
    let priorities = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
    't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, 'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35, 'J': 36,'K': 37, 'L': 38, 'M': 39,
    'N': 40, 'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52};
    let compartment1 = '', compartment2 = '';
    let prioritySum = 0;
    for(let i = 0; i < rucksacks.length; i++){
        compartment1 = rucksacks[i].substring(0, rucksacks[i].length/2);
        compartment2 = rucksacks[i].substring(rucksacks[i].length/2);
        for(let j = 0; j < compartment1.length; j++){
            if(compartment2.includes(compartment1[j])){
                prioritySum+= priorities[compartment1[j]];
                break;
            }
        }
    }
    return prioritySum;
}

function partTwo(rucksacks){
    let priorities = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
    't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, 'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35, 'J': 36,'K': 37, 'L': 38, 'M': 39,
    'N': 40, 'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52};
    let groupPriorities = 0;
    for(let i  = 0; i < rucksacks.length; i += 3){
        let elf1 = rucksacks[i];
        let elf2 = rucksacks[i + 1];
        let elf3 = rucksacks[i + 2];
        for(let j = 0; j < elf1.length; j++){
            if(elf2.includes(elf1[j]) && elf3.includes(elf1[j])){
                groupPriorities += priorities[elf1[j]];
                break;
            }
        }
    }
    return groupPriorities;
}

let rucksacks = await getData('./data.txt');
let prioritySum = partOne(rucksacks);
console.log(prioritySum);
let groupPriority = partTwo(rucksacks);
console.log(groupPriority);