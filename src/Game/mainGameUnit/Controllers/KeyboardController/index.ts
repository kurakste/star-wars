import Controller from '../Controller';
import IGameFlowEngine from '../../../Interfaces/IGameFlowEngine.t';

class KeyboardController extends Controller {
  gameFlowEngine: IGameFlowEngine;
  eventHandler(e: KeyboardEvent): void {
    // console.log('from KeyboardController', e);
    this.eventsListeners.map(o => {
      o.keyboardHandler && o.keyboardHandler(e);
    });
    this.gameFlowEngine.keyboardHandler(e);
    
  }

  public addGameFlowEngine(o: IGameFlowEngine): void { 
    this.gameFlowEngine = o;
  }

}

export default KeyboardController;
