import Controller from '../Controller'
class KeyboardController extends Controller {
  eventHandler(e: KeyboardEvent): void {
    // console.log('from KeyboardController', e);
    this.eventsListeners.map(o => o.keyboardHandler(e));
  }
}

export default KeyboardController;