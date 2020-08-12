import Game from './Game'
interface Drawable {
  draw(gm: Game): Promise<void>
}

export default Drawable;