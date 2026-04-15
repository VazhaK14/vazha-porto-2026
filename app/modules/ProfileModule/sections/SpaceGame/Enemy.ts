import type { Entity } from "./IEntity";

export class Enemy implements Entity {
  private sprite: HTMLImageElement;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public lastShot: number,
  ) {
    this.sprite = new Image();
    this.sprite.src = "/enemy.png";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.imageSmoothingEnabled = false;

    if (this.sprite.complete) {
      ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = "#00ff00";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
