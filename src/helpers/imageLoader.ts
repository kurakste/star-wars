export default function(src:string){
  console.log('from load image', src);
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  })
}