import imgPath from './assets/img/mainHero2.png';
import imageLoader from './helpers/imageLoader';

function addCanvasElement():HTMLCanvasElement {
  const can:HTMLCanvasElement = document.createElement('canvas');
  can.width = 600;
  can.height = 1000;
  can.style.background = 'black';
  return can;
}

async function draw(ctx: CanvasRenderingContext2D): Promise<void> {
  const img: any = await imageLoader(imgPath);
  ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);

}

(async function() {
  const canvas: HTMLCanvasElement = addCanvasElement();
  const ctx = canvas.getContext('2d');
  await draw(ctx);

  document.body.appendChild(canvas);

  console.log('hello!');
})();
