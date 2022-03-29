interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enyme: SimpleFighter): void;
  receiveDamage(attackPoints: number): void;
}

export default SimpleFighter;