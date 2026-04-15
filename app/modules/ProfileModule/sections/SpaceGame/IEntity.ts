export interface Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  draw(ctx: CanvasRenderingContext2D): void;
}
