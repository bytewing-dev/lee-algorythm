import checkMap from './check_map';
import { Node } from './interfaces';

export default function initialisation(path: string, mapNumber: number[][]): Node{
  const fs = require('fs');
  const content: string = fs.readFileSync(path, 'utf-8').split('\n');

  let xStart: number = -1;
  let yStart: number = -1;

  let map: string[][] = [];
  for (let row: number = 0; row < content.length; row += 1) {
    let lines: string[] = [];
    for (let col: number = 0; col < content[row].length; col += 1) {
      lines.push(content[row][col]);
    }
    map.push(lines);
  }

  if (!checkMap(map)) {
    console.log('\nLa carte n\'est pas conforme car elle ne contient pas de point de départ et/ou de point d\'arrivée.\n');
    process.exit(0);
  }

  for (let row: number = 0; row < map.length; row += 1) {
    let numberLines: number[] = [];
    for (let col: number = 0; col < map[row].length; col += 1) {
      if ((map[row][col]) === 'o') {
        numberLines.push(-1);
      } else if ((map[row][col]) === '.') {
        numberLines.push(0);
      } else if ((map[row][col]) === 'S') {
        xStart = row;
        yStart = col;
        numberLines.push(-2);
      } else if ((map[row][col]) === 'E') {
        numberLines.push(-3);
      }
    }
    mapNumber.push(numberLines);
  }
  return {x: xStart, y: yStart};
}
