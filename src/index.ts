import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Primeiro abra seu terminal, e rode "npm run dev"

// crie seus personagens como feito abaixo

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

const pve: PVE = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

// coloque os personagens dentro de um console.log, salve e olhe no seu terminal ;D

console.log('Primeiro jogador =>');
console.log(player1);
console.log('----------------------------------------');
console.log('Segundo jogador =>');
console.log(player2);
console.log('----------------------------------------');
console.log('Terceiro jogador =>');
console.log(player3);

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };