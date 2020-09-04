import IGameFieldObject from '../../Interfaces/IGameFieldObject';
import IGameFlowEngine from '../../Interfaces/IGameFlowEngine';

class Controller {
 eventsListeners:(IGameFieldObject)[] = [];

  addNewEventListener(o:IGameFieldObject): void {
    this.eventsListeners.push(o);
  }
  
  eventHandler(e: any): void { return }

  removeEventListener(o:IGameFieldObject): void {
    this.eventsListeners = this.eventsListeners.filter(el=> el.id !== o.id);
  }
}

export default Controller;
