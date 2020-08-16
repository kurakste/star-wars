import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/GameObjTypes';

  class MainHero {
  width: number = 0;
  height: number;
  id: string;
  type: GameObjTypes;
  subscribes: Events[] = [];

  constructor() {
    this.subscribes = [Events.Keyboard, Events.Clock ];
    this.id = cryptoRandomString({length: 10});
    this.type = GameObjTypes.mainGameActor;

  };

  keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler');
  }
}

export default MainHero;