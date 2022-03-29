import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    let continueFight = true;

    while (continueFight) {
      this._monsters.forEach(
        (monster: SimpleFighter | Fighter) => this._player.attack(monster),
      );
      if (this._monsters.every(
        (monster: SimpleFighter | Fighter) => monster.lifePoints === -1,
      )) {
        continueFight = false;
        return 1;
      }
      this._monsters.forEach((monster) => monster.attack(this._player));
      if (this.player.lifePoints === -1) {
        continueFight = false;
        return -1;
      }
    }
    return 0;
  }
}

export default PVE;
