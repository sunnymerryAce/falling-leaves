import Leaf from './Leaf';
import { isSp } from '../helper/userAgent';
import { getRandomInt } from '../helper/util';

/**
 * 落葉アニメーション
 */
export default class FallingLeaves {
  constructor() {
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;

    // canvas要素の取得
    this.canvas = document.querySelector('.js-canvas-leaves');
    this.ctx = this.canvas.getContext('2d');
    // 葉の画像の配列
    this.leafImages = [];
    // 葉の位置情報を格納する配列
    this.leaves = [];
    // 後面の葉の総計
    this.leavesCount = 6;
    // 前面のブラーの葉の総計
    this.blurLeavesCount = 3;
    // 葉のデフォルトのサイズ
    this.size = isSp() ? 0.3 : 0.5;

    this.initialize();
  }

  initialize() {
    // リサイズ時にcanvasの大きさを調整する
    window.addEventListener('resize', () => {
      this.resize();
    });
    this.resize();
    this.loadImages();
  }

  // canvasサイズを画面に合わせる
  resize() {
    // canvasの幅と高さを設定
    const container = document.querySelector('.js-canvas-container');
    this.ctx.canvas.width = container.getBoundingClientRect().width;
    this.ctx.canvas.height = container.getBoundingClientRect().height;
    // 葉のインスタンスにも高さを再設定
    for (let i = 0; i < this.leaves.length; i += 1) {
      this.leaves[i].canvasHeight = this.ctx.canvas.height;
    }
  }

  // 葉の画像を読み込む
  async loadImages() {
    const src = [
      '/images/leaf-medium-01.png',
      '/images/leaf-medium-02.png',
      '/images/leaf-blur.png',
    ];
    const promises = [];
    for (let i = 0; i < src.length; i++) {
      promises.push(this.loadImage(src[i], i));
    }
    await Promise.all(promises);
    this.initLeaves();
    this.loop();
  }

  loadImage(src, i) {
    return new Promise(resolve => {
      this.leafImages[i] = new Image();
      this.leafImages[i].onload = () => {
        resolve();
      };
      this.leafImages[i].src = src;
    });
  }

  // 落ち葉のパラメータを初期化する
  initLeaves() {
    // 後面パターン1の葉
    for (let i = 0; i < this.leavesCount / 2 + 1; i += 1) {
      this.leaves.push(
        new Leaf(
          this.ctx,
          this.leafImages[0],
          (this.size * getRandomInt(7, 9)) / 10,
          this.ctx.canvas.height,
        ),
      );
    }
    // 後面パターン2の葉
    for (let i = 0; i < this.leavesCount / 2; i += 1) {
      this.leaves.push(
        new Leaf(
          this.ctx,
          this.leafImages[1],
          (this.size * getRandomInt(7, 9)) / 10,
          this.ctx.canvas.height,
        ),
      );
    }
    // ブラーの葉
    for (let i = 0; i < this.blurLeavesCount; i += 1) {
      this.leaves.push(
        new Leaf(
          this.ctx,
          this.leafImages[2],
          this.size,
          this.ctx.canvas.height,
        ),
      );
    }
  }

  // 描画のループ処理
  loop() {
    // 描画をクリア
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // 描画
    for (let i = 0; i < this.leavesCount + this.blurLeavesCount; i += 1) {
      this.leaves[i].draw();
      this.leaves[i].update();
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }
}
