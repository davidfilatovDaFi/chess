import { Cell } from "./Cell";

export class Board {
  cells: Cell[][] = []

  constructor() {
    this.getBoard()
  }

  public getBoard() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0 ) {
          row.push(new Cell('white', j, i))
        } else {
          row.push(new Cell('black', j, i))
        }
      }
      this.cells.push(row)
    }
  }
}