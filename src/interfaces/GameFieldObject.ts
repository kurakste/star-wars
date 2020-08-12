interface GameFieldObject  {
  id: string;
  type: string;
  width: number;
  height: number;

  draw?: (o: any) => void;
  keyboardHandler?: (e: KeyboardEvent) => void;
}

export default GameFieldObject;