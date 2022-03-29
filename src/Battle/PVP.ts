import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _firstPlayer: Fighter;
  private _secondPlayer: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);

    this._firstPlayer = player;
    this._secondPlayer = enemy;
  }

  fight(): number {
    let continueFight = true;

    while (continueFight) {
      this._secondPlayer.attack(this._firstPlayer);
      if (this._firstPlayer.lifePoints < 1) {
        continueFight = false;
        return 1;
      }
      this._firstPlayer.attack(this._secondPlayer);
      if (this._secondPlayer.lifePoints < 1) {
        continueFight = false;
        return -1;
      }
    }
    return 0;
  }
}

export default PVP;