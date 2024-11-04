export interface Node {
    x: number,
    y: number
}

export interface WaveResult {
    endFound: boolean,
    endNode: Node
}

export interface FSPResult {
    solutionPath: Node[];
    waveCount: number
}
