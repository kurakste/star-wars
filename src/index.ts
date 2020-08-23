import MainGame from './Game/mainGameUnit';
import Hero from './Game/Actors/Hero';

(async function() {
  
    //console.log('----------', "keyboardHandler" in main); 
  const game = new MainGame(400, 900);
  await game.initGame();
  

  setInterval(game.clock, 1);
  window.addEventListener('keydown',(e:KeyboardEvent)=>game.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>game.keyboardHandler(e));

})();
