import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy:Energy;

  constructor(name:string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy | undefined { 
    return { 
      type_: this._energy.type_,
      amount: this._energy.amount,
    }; 
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;

    if (this._lifePoints <= damage) {
      this._lifePoints = -1;
    }
    if (damage > 0) {
      this._defense = damage;
    } 

    return this._lifePoints;
  }
