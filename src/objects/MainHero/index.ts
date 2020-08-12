import Hero from '../../interfaces/Hero';
class MainHero {
  width: number = 0;
  height: number;
  id: string;
  type: string;

  keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler');
  }
}

export default MainHero;