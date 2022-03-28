import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _instaces = 0;

  static createdRacesInstances(): number {
    this._instaces += 1;
    return this._instaces;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Orc;
