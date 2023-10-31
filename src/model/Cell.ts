export class Cell {
  color: 'black' | 'white'
  x: number
  y: number

  constructor(color: 'black' | 'white', x: number, y: number) {
    this.color = color
    this.x = x
    this.y = y
  }
}