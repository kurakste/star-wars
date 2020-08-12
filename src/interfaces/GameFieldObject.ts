interface GameFieldObject {
  id: string;
  type: string;
  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
}

export default GameFieldObject;