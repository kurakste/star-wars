import MainGame from './Game/mainGameUnit';
import './scss/main.scss';
import background from './assets/space_background.jpg'

(async function() {
  
  const game = new MainGame(400, 900);
  await game.initGame();
  console.log('===============>', game);
  
  setInterval(game.clock, 30);
  window.addEventListener('keydown',(e:KeyboardEvent)=>game.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>game.keyboardHandler(e));

})();
console.log('-----!>', background);
document.body.style.backgroundImage  = background;


