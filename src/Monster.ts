import { SimpleFighter } from './Fighter';

class Mosnter implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;

    if (this._lifePoints <= damage) {
      this._lifePoints = -1;
    }
    if (damage > 0) {
      this._lifePoints = damage;
    }

    return this._lifePoints;
  }

  attack(enyme: SimpleFighter): void {
    enyme.receiveDamage(this._strength);
  }
}

export default Mosnter;