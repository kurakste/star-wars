import mainGame from './objects/mainGameUnit/index';
import MainHero from './objects/MainHero';

(async function() {
  const game = new mainGame(400, 600);
  await game.initGame();
  game.draw();
  const mainHero = new MainHero();
  game.addObjectOnField(mainHero);
  setInterval(game.clock, 8);
  window.addEventListener('keydown',(e:KeyboardEvent)=>game.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>game.keyboardHandler(e));

})();
