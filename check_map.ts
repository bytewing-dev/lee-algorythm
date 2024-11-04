export default function checkMap(map: string[][]): boolean{
    let startExists: boolean = false;
    let endExists: boolean = false;
    
    for (let row: number = 0; row < map.length; row += 1) {
      for (let col: number = 0; col < map[row].length; col += 1) {
        if ((map[row][col]) === 'S') {
          startExists = true;
        } else if ((map[row][col]) === 'E') {
          endExists = true;
        }
      }
    }
    if (startExists === true && endExists === true) {
      return true;
    } else {
      return false;
    }
  }