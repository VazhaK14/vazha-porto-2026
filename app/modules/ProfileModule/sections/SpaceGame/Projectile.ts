import type { Entity } from "./IEntity";

export class Projectile implements Entity {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public velocityY: number,
    public color: string,
  ) {}

  update() {
    this.y += this.velocityY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
