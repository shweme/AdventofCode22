import * as fs from 'fs/promises';

async function getData(filename){
    let buffer = await fs.readFile(filename, 'utf8'); // reading puzzle input
    return buffer;
}

function startMarker(packets, end){
    let ind = end - 1, unique = 0;

    for(let i = 0; i < packets.length - end; i++){
        let marker = packets.substring(i, i+end);
        for(let j = 0; j < marker.length; j++){
            if(marker.lastIndexOf(marker[j]) !== marker.indexOf(marker[j])){
                unique = 0;
                break;
            } else {
                unique++;
            }
        }
        if(unique === end){
            ind = i + end;
            break;
        }
        unique = 0;
    }
    return ind;

}

let packets = await getData('./data.txt');
let firstP = startMarker(packets, 4); //Part one: start of packet marker
console.log(firstP);
let firstM = startMarker(packets, 14); //Part two: start of message marker
console.log(firstM);