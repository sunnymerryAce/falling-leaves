import { getRandomInt } from '../helper/util';
/**
 * 単体の葉を扱うクラス
 */
export default class Leaf {
  constructor(ctx, leaf, size, canvasHeight) {
    this.ctx = ctx;
    this.leaf = leaf;
    this.size = size;
    this.canvasHeight = canvasHeight;
    this.setInitialPosition();
  }

  /**
   * 初期位置を設定する
   */
  setInitialPosition() {
    // 横位置 右方向になびかせるため、左寄りに初期位置を設定する
    this.positionX = getRandomInt(
      -window.innerWidth * 0.2,
      window.innerWidth * 0.8,
    );
    // 縦位置
    this.positionY = getRandomInt(
      0 - this.leaf.height * 2,
      this.canvasHeight / 2,
    );
    // 角度
    this.angle = Math.random() * 360;
    // 落下速度
    this.speed = getRandomInt(5, 7) * this.size;
    // 横風の強さ
    this.wind = getRandomInt(1, 7) / 10;
  }

  /**
   * 葉の座標を動かす
   */
  update() {
    this.positionX += this.wind;
    this.positionY += this.speed;
    this.angle += this.speed / 3;
    if (this.angle > 360) {
      this.angle = 0;
    }
    // 画面最下部まで達した場合
    if (this.positionY > this.canvasHeight + this.leaf.height) {
      // 位置の再設定
      this.setInitialPosition();
      // 開始の高さはビューポートの上に設定
      this.positionY = 0 - getRandomInt(0, this.leaf.height);
    }
  }

  /**
   * 葉を描画する
   */
  draw() {
    // キャンバスの回転、座標を設定
    const cos = Math.cos((this.angle * Math.PI) / 180);
    const sin = Math.sin((this.angle * Math.PI) / 180);
    this.ctx.setTransform(cos, sin, sin, cos, this.positionX, this.positionY);
    // 描画
    this.ctx.drawImage(
      this.leaf,
      0,
      0,
      this.leaf.width * this.size,
      this.leaf.height * this.size,
    );
    // キャンバスを元の位置に戻す
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
