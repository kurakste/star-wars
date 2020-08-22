import Game from './IGame'
interface IDrawable {
  draw(gm: Game): Promise<void>
}

export default IDrawable;