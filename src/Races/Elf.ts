import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instaces = 0;

  static creatRacesInstances(): number {
    this._instaces += 1;
    return this._instaces;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Elf;
