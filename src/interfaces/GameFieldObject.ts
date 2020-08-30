import Events from './Events';
import directions from './Direction';
import gameObjTypes from './gameObjTypes';

interface GameFieldObject  {
  id: string;
  type: gameObjTypes;
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