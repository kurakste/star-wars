import mainGame from './mainGameUnit/index';





(async function() {
  const game = new mainGame(400, 600);
  await game.initGame();
  game.draw();

})();
