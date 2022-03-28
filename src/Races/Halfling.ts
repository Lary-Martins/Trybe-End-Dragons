import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instaces = 0;

  static createdRacesInstances(): number {
    this._instaces += 1;
    return this._instaces;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Halfling;
