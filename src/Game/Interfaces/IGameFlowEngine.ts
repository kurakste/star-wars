import IGameFieldObject from './IGameFieldObject';

interface IGameFlowEngine  {
  id: string;
  type: string;
  draw?: (o: any) => void;
  keyboardHandler: (e: KeyboardEvent) => void;
  borderCollisionHandler?: () => void;
  collisionHandler?: (o: IGameFieldObject) => void;
  clock?:() => void;
}

export default IGameFlowEngine;