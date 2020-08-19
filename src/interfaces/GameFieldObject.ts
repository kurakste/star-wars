import GameObjTypes from './gameObjTypes';
import Events from './Events';

interface GameFieldObject  {
  id: string;
  type: GameObjTypes;
  width: number;
  height: number;
  subscribes: Events[];

  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
}

export default GameFieldObject;