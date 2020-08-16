import mainGame from './objects/mainGameUnit/index';
import MainHero from './objects/MainHero';

(async function() {
  const main = new MainHero();
    console.log('----------', "keyboardHandler" in main); 
  const game = new mainGame(400, 600);
  await game.initGame();

  game.draw();

  game.addObjectOnField(main);
  setInterval(game.clock, 8);
  window.addEventListener('keydown',(e:KeyboardEvent)=>game.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>game.keyboardHandler(e));

})();
