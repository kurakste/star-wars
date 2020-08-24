import Actor from "../../Actors";
import Events from '../../../../interfaces/Events';
import GameObjTypes from '../../../../interfaces/gameObjTypes'

class Fire extends Actor {

  constructor(xpos: number, ypos: number) {
    super();
    this.width = 40;
    this.height = 40;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [Events.Clock, Events.Draw, Events.Collision ];
    this.type = GameObjTypes.mainGameActor;
    this.spriteXOffset = 369
    this.spriteYOffset = 612;
    this.spriteHeight = 40;
    this.spriteWidth = 40;
    this.vSpeed = 1;
  }

  clock() {
    this.ypos = this.ypos - 1;
  }
}

export default Fire;