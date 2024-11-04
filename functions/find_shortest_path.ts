import { Node, FSPResult } from './interfaces';

export default function findShortestPath(mapNumber: number[][], currentNode: Node, waveCount: number, fSPResult: FSPResult): FSPResult{

    if (currentNode.x + 1 < mapNumber.length && mapNumber[currentNode.x + 1][currentNode.y] === waveCount - 2) {
      fSPResult.solutionPath.push({x: currentNode.x + 1, y: currentNode.y});
      currentNode.x += 1;
      waveCount -= 1;
    } else if (currentNode.x + 1 < mapNumber.length && mapNumber[currentNode.x + 1][currentNode.y] === -2) {
      fSPResult.solutionPath.push({x: currentNode.x + 1, y: currentNode.y});
      waveCount = 0;
    }
    
    if (currentNode.x - 1 >= 0 && mapNumber[currentNode.x - 1][currentNode.y] === waveCount - 2) {
      fSPResult.solutionPath.push({x: currentNode.x - 1, y: currentNode.y});
      currentNode.x -= 1;
      waveCount -= 1;
    } else if (currentNode.x - 1 >= 0 && mapNumber[currentNode.x - 1][currentNode.y] === -2) {
      fSPResult.solutionPath.push({x: currentNode.x - 1, y: currentNode.y});
      waveCount = 0;
    }
    
    if (currentNode.y + 1 < mapNumber[currentNode.x].length && mapNumber[currentNode.x][currentNode.y + 1] === waveCount - 2) {
      fSPResult.solutionPath.push({x: currentNode.x, y: currentNode.y + 1});
      currentNode.y += 1;
      waveCount -= 1;
    } else if (currentNode.y + 1 < mapNumber.length && mapNumber[currentNode.x][currentNode.y + 1] === -2) {
      fSPResult.solutionPath.push({x: currentNode.x, y: currentNode.y + 1});
      waveCount = 0;
    }
    
    if (currentNode.y - 1 >= 0 && mapNumber[currentNode.x][currentNode.y - 1] === waveCount - 2) {
      fSPResult.solutionPath.push({x: currentNode.x, y: currentNode.y - 1});
      currentNode.y -= 1;
      waveCount -= 1;
    } else if (currentNode.y - 1 < mapNumber.length && mapNumber[currentNode.x][currentNode.y - 1] === -2) {
      fSPResult.solutionPath.push({x: currentNode.x, y: currentNode.y - 1});
      waveCount = 0;
    }
    return {solutionPath: fSPResult.solutionPath, waveCount};
  }