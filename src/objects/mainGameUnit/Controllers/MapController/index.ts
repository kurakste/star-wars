import GameFieldObject from '../../../../interfaces/GameFieldObject';
class MapController {
  map: GameFieldObject[];

  public addActor(a: GameFieldObject) {
    this.map.push(a);
  }

  public removeActor(a: GameFieldObject) {
    this.map = this.map.filter((e) => e.id !== a.id);
  }
} 

export default MapController;