interface Hero {
  width: number;
  height: number;
  id: string;
  type: string;

  keyboardHandler(e: KeyboardEvent): void;
}

export default Hero;