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

