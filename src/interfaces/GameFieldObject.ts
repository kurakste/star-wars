import GameObjTypes from './gameObjTypes';
import Events from './Events';

interface GameFieldObject  {
  id: string;
  type: GameObjTypes;
  subscribes: Events[];

  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
  clock?:() => void;
}

export default GameFieldObject;