class MainHero {
  width: number;
  height: number;
  id: string;
  type: string;

  keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler');
  }
}

export default MainHero;