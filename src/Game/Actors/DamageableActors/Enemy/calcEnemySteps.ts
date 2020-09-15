type TOut = { dx: number, dy: number };
type TInput = { x: number, y: number};

const d9 = () => Math.random() * 18 - 9;
const sn = (y: number) => 5*Math.sin(y/30);

function calcEnemySteps(level: number, input: TInput): TOut {
  const {x, y} = input;
  const out: TOut = { dx: 0, dy: 2};
  switch (level) {
    case 1:
      out.dy = 1;
      out.dx = sn(y);
      break;
  }
  return out;
}
export { calcEnemySteps } 