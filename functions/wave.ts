import { Node, WaveResult } from './interfaces';

export default function wave(mapNumber: number[][], queue: Node[], temp: Node[], waveCount: number, endFound: boolean): WaveResult{  
  let xEnd: number = -1;
  let yEnd: number = -1;
  
  for (let i: number = 0; i < queue.length; i += 1) {
    if (queue[i].x + 1 < mapNumber.length && mapNumber[queue[i].x + 1][queue[i].y] === 0) {
      mapNumber[queue[i].x + 1][queue[i].y] = waveCount;
      temp.push({x: queue[i].x + 1, y: queue[i].y});
    } else if (queue[i].x + 1 < mapNumber.length && mapNumber[queue[i].x + 1][queue[i].y] === -3) {
      xEnd = queue[i].x + 1;
      yEnd = queue[i].y;
      endFound = true;
    }
    
    if (queue[i].x - 1 >= 0 && mapNumber[queue[i].x - 1][queue[i].y] === 0) {
      mapNumber[queue[i].x - 1][queue[i].y] = waveCount;
      temp.push({x: queue[i].x - 1, y: queue[i].y});
    } else if (queue[i].x - 1 >= 0 && mapNumber[queue[i].x - 1][queue[i].y] === -3) {
      xEnd = queue[i].x - 1;
      yEnd = queue[i].y;
      endFound = true;
    }
    
    if (queue[i].y + 1 < mapNumber[queue[i].x].length && mapNumber[queue[i].x][queue[i].y + 1] === 0) {
      mapNumber[queue[i].x][queue[i].y + 1] = waveCount;
      temp.push({x: queue[i].x, y: queue[i].y + 1});
    } else if (queue[i].y + 1 < mapNumber.length && mapNumber[queue[i].x][queue[i].y + 1] === -3) {
      xEnd = queue[i].x;
      yEnd = queue[i].y + 1;
      endFound = true;
    }
    
    if (queue[i].y - 1 >= 0 && mapNumber[queue[i].x][queue[i].y - 1] === 0) {
      mapNumber[queue[i].x][queue[i].y - 1] = waveCount;
      temp.push({x: queue[i].x, y: queue[i].y - 1});
    } else if (queue[i].y - 1 < mapNumber.length && mapNumber[queue[i].x][queue[i].y - 1] === -3) {
      xEnd = queue[i].x;
      yEnd = queue[i].y - 1;
      endFound = true;
    }
  }
  if (queue.length === 0) {
    console.log("\nCette carte n'a pas de solution car il n'existe pas de chemin permettant de relier le point de départ au point d'arrivée.\n");
    process.exit(0);
  }
  let endNode: Node = {x: xEnd, y: yEnd};
  return {endFound, endNode};
}
