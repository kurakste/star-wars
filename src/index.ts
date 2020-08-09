import imgPath from './img_the_scream.jpg';
import imageLoader from './helpers/imageLoader';

function addCanvasElement():HTMLCanvasElement {
  const can:HTMLCanvasElement = document.createElement('canvas');
  can.width = 600;
  can.height = 1000;
  return can;
}

async function draw(ctx: CanvasRenderingContext2D): Promise<void> {
  const img: any = await imageLoader(imgPath);
  ctx.drawImage(img, 100, 100, 100, 100, 20, 20, 170, 170);
  ctx.rotate(45 * Math.PI / 180);
}

(async function() {
  const canvas: HTMLCanvasElement = addCanvasElement();
  const ctx = canvas.getContext('2d');
  await draw(ctx);

  document.body.appendChild(component());
  document.body.appendChild(canvas);

  console.log('hello!');
})();
