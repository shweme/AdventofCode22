import * as fs from 'fs/promises';

async function getData(filename){
    let sections = [];
    let data = await fs.readFile(filename, 'utf8'); // reading puzzle input
    sections = data.split('\r\n'); //grouping puzzle input data by section ranges
    return sections;
}

function ranges(line){
    let range1min = parseInt(line[0].substring(0, line[0].indexOf(' ')));
    let range1max = parseInt(line[0].substring(line[0].indexOf(' ')));
    let range2min = parseInt(line[1].substring(0, line[1].indexOf(' ')));
    let range2max = parseInt(line[1].substring(line[1].indexOf(' ')));
    return {range1min, range1max, range2min, range2max};
}

function partOne(sections){
    let fullyContained = 0;

    for(let i = 0; i < sections.length; i++){
        let line = (sections[i].split('-').join(' ').split(','));
        let {range1min, range1max, range2min, range2max} = ranges(line);
        if((range1min >= range2min && range1max <= range2max) || (range1min <= range2min && range1max >= range2max)){
            fullyContained++;
        }
    }
    return fullyContained;
}

function partTwo(sections){
    let contained = 0;

    for(let i = 0; i < sections.length; i++){
        let line = (sections[i].split('-').join(' ').split(','));
        let {range1min, range1max, range2min, range2max} = ranges(line);
        if( (range1min >= range2min && range1min <= range2max) || (range1max >= range2min && range1max <= range2max) || (range2min >= range1min && range2min <= range1max) || (range2max >= range1min && range2max <= range1max)){
            contained++
        }
    }
    return contained;
}

let sections = await getData('./data.txt');
let fullyContained = partOne(sections);
console.log(fullyContained);
let contained = partTwo(sections);
console.log(contained);