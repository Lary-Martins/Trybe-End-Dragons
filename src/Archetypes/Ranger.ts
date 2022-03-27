import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    this._instances += 1;
    return this._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;