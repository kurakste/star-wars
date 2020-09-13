import Enemy from ".."
import MainGame from "../../../../mainGameUnit";

class EnemyFactory {

  createEnemy(game: MainGame, xpos: number, ypos: number, level: number): Enemy {
    console.log('new enemy -------------- ');
    const enm = new Enemy(game, xpos, ypos);
    enm.health = level * 200;
    enm.maxHealth = level * 200;
    enm.vSpeed = enm.vSpeed + enm.vSpeed * (level -1);
    enm.setSpriteMatrix(level-1);
    return enm;
  }
  
}

export default EnemyFactory;
