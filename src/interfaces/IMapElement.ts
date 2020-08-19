import gameObjectsType from './GameObjTypes';
import IGameFieldsObjectParams from './IGameFieldsObjectParams'

interface IMapElements {
  type: gameObjectsType
  params: IGameFieldsObjectParams
}

export default IMapElements;