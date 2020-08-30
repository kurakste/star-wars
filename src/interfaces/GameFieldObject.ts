import Events from './Events';
import directions from './Direction';
interface GameFieldObject  {
  id: string;
  type: string;
  subscribes: Events[];
  xpos: number;
  ypos: number;
  width: number;
  height: number;
  demage?: number;

  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
  borderCollisionHandler: (dir: directions) => void;
  collisionHandler: (o: GameFieldObject) => void;
  clock?:() => void;
}

export default GameFieldObject;