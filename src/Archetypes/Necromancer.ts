import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    this._instances += 1;
    return this._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;