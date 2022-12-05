import * as fs from 'fs/promises';

async function getData(filename){
    let cheatsheet = [];
    let data = await fs.readFile(filename, 'utf8'); // reading puzzle input
    cheatsheet = data.split('\r\n'); //grouping puzzle input data by single rounds
    return cheatsheet;
}

function partOne(cs){
    let score = 0;
    for(let i = 0; i < cs.length - 1; i++){
        let opTurn = cs[i][0];
        let myTurn = cs[i][2];
        switch(opTurn){
            case 'A': //if opponent plays rock
                if(myTurn === 'X'){
                    score += 1 + 3; // 1 point for using rock, 3 for a draw
                } else if(myTurn === 'Y'){
                    score += 2 + 6; //2 points for using paper, 6 for winning
                } else {
                    score += 3 + 0; //3 points for using scissors, 0 for losing
                }
                break;
            case 'B': //if opponent plays paper
                if(myTurn === 'X'){
                    score += 1 + 0; // 1 point for using rock, 0 for losing
                } else if(myTurn === 'Y'){
                    score += 2 + 3; //2 points for using paper, 3 for a draw
                } else {
                    score += 3 + 6; //3 points for using scissors, 6 for winning
                }
                break;
            case 'C': //if opponent plays scissors
                if(myTurn === 'X'){
                    score += 1 + 6; // 1 point for using rock, 6 for winning
                } else if(myTurn === 'Y'){
                    score += 2 + 0; //2 points for using paper, 0 for losing
                } else {
                    score += 3 + 3; //3 points for using scissors, 3 for a draw
                }
                break;
        }
    }
    return score;
}

function partTwo(cs){
    let score = 0;
    for(let i = 0; i < cs.length - 1; i++){
        let opTurn = cs[i][0];
        let outcome = cs[i][2];
        switch(outcome){
            case 'X': //if round is to end in a loss
                if(opTurn === 'A'){ //opponent chooses rock
                    score += 3 + 0; // you choose scissors: 3 points for using scissors, 0 for a loss
                } else if(opTurn === 'B'){ //opponent chooses paper
                    score += 1 + 0; //you choose rock: 1 point for using rock, 0 for a loss
                } else { //opoonent chooses scissors
                    score += 2 + 0; //you choose paper: 2 points for using paper, 0 for losing
                }
                break;
            case 'Y': //if round is to end in a draw
                if(opTurn === 'A'){//opponent chooses rock
                    score += 1 + 3; //you choose rock: 1 point for using rock, 3 for a draw
                } else if(opTurn === 'B'){//opponent chooses paper
                    score += 2 + 3; //you choose paper: 2 points for using paper, 3 for a draw
                } else {//opponent chooses scissors
                    score += 3 + 3; //you choose scissors: 3 points for using scissors, 3 for a draw
                }
                break;
            case 'Z': //if round is to end in a win
                if(opTurn === 'A'){//opponent chooses rock
                    score += 2 + 6; //you choose paper: 2 point for using paper, 6 for winning
                } else if(opTurn === 'B'){// opponent chooses paper
                    score += 3 + 6; //you choose scissors: 3 points for using scissors, 6 for winning
                } else {//opponent chooses scissors
                    score += 1 + 6; //you choose rock: 1 point for using rock, 6 for winning
                }
                break;
        }
    }
    return score;
}

let cs = await getData('./data.txt'); //translating cheatsheet into individual moves and countermoves data
let score = partOne(cs);
console.log(score);
score = partTwo(cs);
console.log(score);