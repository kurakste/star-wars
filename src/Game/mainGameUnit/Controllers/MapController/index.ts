import GameFieldObject from '../../../../interfaces/GameFieldObject';
import myMap from '../../../../maps/testMap';
import gameFieldObjectTypes from '../../../../interfaces/gameObjTypes';
import IMapElement from '../../../../interfaces/IMapElement';
import MainHero from '../../../Actors/Hero'
class MapController {
  map: GameFieldObject[] =[];

  loadMap() {
    // console.log('load map', myMap)
    myMap.map((el:IMapElement ) => {
      switch (el.type) {
        case gameFieldObjectTypes.mainGameActor: 
        let obj = new MainHero(el.params.xpos, el.params.ypos);
        this.addActor(obj);
        break;
      }
    });
  }

  public addActor(a: GameFieldObject) {
    this.map.push(a);
  }

  public removeActor(a: GameFieldObject) {
    this.map = this.map.filter((e) => e.id !== a.id);
  }

  getMap() {
    return this.map.slice();
  }
} 

export default MapController;