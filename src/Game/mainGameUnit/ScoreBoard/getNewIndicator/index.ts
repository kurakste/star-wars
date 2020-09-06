import CollisionController from "../../Controllers/CollisionsController";

function getNewIndicator(parentDiv: HTMLElement, name: string): HTMLElement {
  const divWrap = document.createElement('div');
  divWrap.style.width = '100%'
  const healthCapture = document.createElement('div');
  healthCapture.innerHTML = `${name}:`;  
  healthCapture.style.width = '50%';
  healthCapture.style.float = 'left';
  const healthValue = document.createElement('div');
  healthValue.innerHTML = "-";
  healthValue.style.float = 'left';
  healthValue.style.width = '40%';
  divWrap.appendChild(healthCapture);
  divWrap.appendChild(healthValue)
  parentDiv.appendChild(divWrap);

  return healthValue;
}

export default getNewIndicator;
