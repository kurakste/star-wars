import IGameFieldObject from "./IGameFieldObject.t";

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