import Events from './Events';
import gameObjTypes from './gameObjTypes';

interface IGameFieldObject  {
  id: string;
  type: gameObjTypes;
  subscribes: Events[];
  xpos: number;
  ypos: number;
  width: number;
  height: number;
  demage?: number;
  health?: number;

  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
  borderCollisionHandler: () => void;
  collisionHandler: (o: any) => void;
  clock?:() => void;
}

export default IGameFieldObject;