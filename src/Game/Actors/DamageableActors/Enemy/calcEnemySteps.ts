type TOut = { dx: number, dy: number };
type TInput = { x: number, y: number};

const d9 = () => Math.random() * 18 - 9;
const sn = (y: number) => 30*Math.sin(20.4*y);

function calcEnemySteps(level: number, input: TInput): TOut {
  const {x, y} = input;
  const out: TOut = { dx: 0, dy: 2};
  switch (level) {
    case 1:
      out.dx = sn(y);
      out.dy = 2;
      break;
  }
  return out;
}
export { calcEnemySteps } 