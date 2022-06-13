//TODO: only define some typical attributes

export interface IStylingObject {
  content: string,
  object?: {
    x: number,
    y: number,
    w: number,
    h: number,
    angle: number
  },
  textStyle?: {
    fontFamily: string,
    fontWeight: string,
    fontSize: number,
    color: string
  }
}
