import gameObjectType from '../Interfaces/gameObjTypes';

const mainGameActor = [
  {sx: 50, sy: 50, width: 140, hight: 140},
  {sx: 50, sy: 300, width: 150, hight: 150},
  {sx: 30, sy: 550, width: 190, hight: 190},
  {sx: 30, sy: 800, width: 190, hight: 190},
  {sx: 30, sy: 1050, width: 190, hight: 190},
  {sx: 50, sy: 1300, width: 190, hight: 210},
  {sx: 50, sy: 1550, width: 140, hight: 140},
  {sx: 30, sy: 1800, width: 190, hight: 190},
  {sx: 30, sy: 2050, width: 190, hight: 190},
  {sx: 50, sy: 2300, width: 140, hight: 150},
  {sx: 30, sy: 2550, width: 190, hight: 320},
  {sx: 30, sy: 3050, width: 190, hight: 190},
];

const mainHeroBullet = [
  {sx: 300, sy: 125, width: 160, hight: 80},
  {sx: 320, sy: 360, width: 140, hight: 150},
  {sx: 230, sy: 550, width: 190, hight: 190},
  {sx: 230, sy: 800, width: 190, hight: 190},
  {sx: 330, sy: 1420, width: 120, hight: 120},
  
];

const enemyBullet = [
  {sx: 580, sy: 3100, width: 160, hight: 120},
  {sx: 600, sy: 2820, width: 160, hight: 120},
  {sx: 600, sy: 2300, width: 120, hight: 120},
  {sx: 600, sy: 2026, width: 120, hight: 120},
  {sx: 620, sy: 1800, width: 100, hight: 120},
  
];

const enemy = [
  {sx: 830, sy: 3050, width: 190, hight: 190},
  {sx: 830, sy: 2800, width: 190, hight: 320},
  {sx: 830, sy: 2550, width: 190, hight: 320},
  {sx: 830, sy: 2300, width: 190, hight: 320},
  {sx: 830, sy: 2050, width: 190, hight: 190},
  {sx: 830, sy: 1800, width: 190, hight: 190},
  {sx: 850, sy: 1550, width: 190, hight: 190},
  {sx: 830, sy: 1300, width: 190, hight: 190},
  {sx: 830, sy: 1050, width: 190, hight: 190},
  {sx: 860, sy: 800, width: 140, hight: 140},
  {sx: 820, sy: 450, width: 230, hight: 300},
  {sx: 820, sy: 100, width: 230, hight: 200},
]

const spriteMatrix = {
  [gameObjectType.mainGameActor]: mainGameActor,
  [gameObjectType.mainHeroBullet]: mainHeroBullet ,
  [gameObjectType.enemyTypeActor]: enemy,
  [gameObjectType.enemyBullet]: enemyBullet,
}



export default spriteMatrix;
