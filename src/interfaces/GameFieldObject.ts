import Events from './Events';
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
  borderCollisionHandler: () => void;
  collisionHandler: (o: GameFieldObject) => void;
  clock?:() => void;
}

export default GameFieldObject;