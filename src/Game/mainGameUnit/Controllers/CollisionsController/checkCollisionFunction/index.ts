 function collides(x: number, y: number, r: number, b: number,
    x2: number, y2: number, r2: number, b2: number): boolean {
      //console.log('colliders', x,y, r, b, x2,y2, r2, b2,)
    const res:boolean = !(r <= x2 || x > r2 ||
      b <= y2 || y > b2);
    return res;
  }

  export default collides;

  