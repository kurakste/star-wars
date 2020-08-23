import MainGame from './Game/mainGameUnit';
import Hero from './Game/Actors/Hero';

(async function() {
  const main = new Hero(200,800);
    console.log('----------', "keyboardHandler" in main); 
  const game = new MainGame(400, 900);
  await game.initGame();
  

  game.addObjectOnField(main);
  setInterval(game.clock, 10);
  window.addEventListener('keydown',(e:KeyboardEvent)=>game.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>game.keyboardHandler(e));

})();
