import { Node, WaveResult, FSPResult } from './functions/interfaces';
import initialisation from './functions/initialisation';
import wave from './functions/wave';
import findShortestPath from './functions/find_shortest_path';

// Gestion d'erreurs de saisie
if (process.argv[2] === undefined) {
  console.log('Vous devez saisir une carte en argument dans la commande de lancement du programme.');
  process.exit(0);
}

// Initialisation du tableau + vérification de la conformité de la map
let mapNumber: number[][] = [];
let startNode: Node = initialisation(process.argv[2], mapNumber);
let queue: Node[] = [startNode];


// Résolution via l'algorithme de Lee
let waveCount: number = 1;
let endFound: boolean = false;
let waveResult: WaveResult = { endFound: false, endNode: {x: -1, y: -1} };

while (!endFound) {
  let temp: Node[] = [];
  waveResult = wave(mapNumber, queue, temp, waveCount, endFound);
  endFound = waveResult.endFound;
  queue = temp;
  waveCount += 1;
}

// Retraçage du chemin inverse identifié grâce à l'algorithme de Lee
let fSPResult: FSPResult = {solutionPath: [], waveCount: 0};
fSPResult.solutionPath.push({...waveResult.endNode});

while (waveCount > 0) {
  fSPResult = findShortestPath(mapNumber, waveResult.endNode, waveCount, fSPResult);
  waveCount = fSPResult.waveCount;
}


// Mise en forme de l'output de la solution et affichage dans le terminal
const resolution: Node[] = fSPResult.solutionPath.reverse();

for (let i: number = 0; i < resolution.length; i += 1) {
  process.stdout.write(resolution[i].x + ':' + resolution[i].y + ' ');
}
console.log('');
