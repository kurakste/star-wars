import Enemy from ".."
import MainGame from "../../../../mainGameUnit";

class EnemyFactory {

  public createEnemy(game: MainGame, xpos: number, ypos: number, level: TGameLevel): Enemy {
    const getEnemyLevelByGameLevel = (l:TGameLevel) => {
      let enemyLvl: TGameLevel = l;
      if (Math.random() >= 0.8) enemyLvl = Math.min(l+1, 8) as TGameLevel
      if (Math.random() <= 0.2) enemyLvl = Math.max(l-1, 0) as TGameLevel
      return enemyLvl;
    }
    return this.createEnemyByLevel(game, xpos, ypos, getEnemyLevelByGameLevel(level))
  }

  private createEnemyByLevel(game: MainGame, xpos: number, ypos: number, lvl: TEnemyLevel): Enemy {
    const health = 200 + lvl*200;
    const enm = new Enemy(game, xpos, ypos, health, lvl);
    return enm;
  }
  
}

export default EnemyFactory;