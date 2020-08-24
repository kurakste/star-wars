import GameObjTypes from './gameObjTypes';
import Events from './Events';
interface GameFieldObject  {
  id: string;
  type: GameObjTypes;
  subscribes: Events[];
  xpos: number;
  ypos: number;
  width: number;
  height: number;

  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
  clock?:() => void;
}

export default GameFieldObject;