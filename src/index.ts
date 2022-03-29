import Battle, { PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1: Character = new Character('Damaia');
const player2: Character = new Character('Sirius Black');
const player3: Character = new Character('Robbie');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1: Monster = new Monster();
const monster2: Monster = new Dragon();

const pvp: PVP = new PVP(player2, player3);
// o método fight da classe PVE, esta em loop infinito 
// e isso n permite que ela seja instanciada e usada de maneira a passar nos testes

// const pve: PVE = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, runBattles };