import Controller from '../Controller'
class ClockController extends Controller {
  eventHandler(): void {
    console.log('Main ClockController', this.eventsListeners);
    this.eventsListeners.map(o => o.clock());
  }
}

export default ClockController;