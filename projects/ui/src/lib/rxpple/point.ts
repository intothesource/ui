export class Point {
  x: number
  y: number
  constructor(point: Point) {
    Object.assign(this, point)
  }
}
