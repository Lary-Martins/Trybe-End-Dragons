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

