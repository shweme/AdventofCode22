/*
[N]             [R]             [C]
[T] [J]         [S] [J]         [N]
[B] [Z]     [H] [M] [Z]         [D]
[S] [P]     [G] [L] [H] [Z]     [T]
[Q] [D]     [F] [D] [V] [L] [S] [M]
[H] [F] [V] [J] [C] [W] [P] [W] [L]
[G] [S] [H] [Z] [Z] [T] [F] [V] [H]
[R] [H] [Z] [M] [T] [M] [T] [Q] [W]
 1   2   3   4   5   6   7   8   9 
*/

import * as fs from 'fs/promises';

async function getData(filename){
    let moves = [];
    let data = await fs.readFile(filename, 'utf8'); // reading puzzle input
    moves = data.split('\r\n'); //grouping puzzle input data by blank line demarcations in file
    return moves;
}

function getMove(move){
    let numbers = move.split(" ");
    return {number: numbers[1], from: numbers[3], to: numbers[5]};
}

function partOne(moves){
    for(let i = 0; i < moves.length; i++){
        let {number, from, to} = getMove(moves[i]);
        for(let j = 1; j <= number; j++){
            stacks[to].push(stacks[from].pop());
        }
    }
}

function partTwo(moves){
    for(let i = 0; i < moves.length; i++){
        let {number, from, to} = getMove(moves[i]);
        let stack = [];
        for(let j = 1; j <= number; j++){
            stack.push(stacks[from].pop());
        }
        for(let j = 1; j <= number; j++){
            stacks[to].push(stack.pop());
        }
        stack 
    }
}

let stack1 = ['R', 'G', 'H', 'Q', 'S', 'B', 'T', 'N'];
let stack2 = ['H', 'S', 'F', 'D', 'P', 'Z', 'J'];
let stack3 = ['Z', 'H', 'V'];
let stack4 = ['M', 'Z', 'J', 'F', 'G', 'H'];
let stack5 = ['T', 'Z', 'C', 'D', 'L', 'M', 'S', 'R'];
let stack6 = ['M', 'T', 'W', 'V', 'H', 'Z', 'J'];
let stack7 = ['T', 'F', 'P', 'L', 'Z'];
let stack8 = ['Q', 'V', 'W', 'S'];
let stack9 = ['W', 'H', 'L', 'M', 'T', 'D', 'N', 'C']
let stacks = {1: stack1, 2: stack2, 3: stack3, 4: stack4, 5: stack5, 6: stack6, 7: stack7, 8: stack8, 9: stack9};

let moves = await getData('./data.txt');
//need to toggle between partOne and partTwo for this solution
//partOne(moves);
partTwo(moves);
console.log(stack1[stack1.length - 1], stack2[stack2.length - 1], stack3[stack3.length - 1], stack4[stack4.length - 1], stack5[stack5.length - 1], 
    stack6[stack6.length - 1], stack7[stack7.length - 1], stack8[stack8.length - 1], stack9[stack9.length - 1]);
