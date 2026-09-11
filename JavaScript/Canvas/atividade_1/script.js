const canvas = document.querySelector("#canvas");

const contexto = canvas.getContext("2d");

// cabeça
contexto.beginPath();

contexto.arc(250, 50, 50, 0, Math.PI * 2);

contexto.stroke();


// corpo
contexto.beginPath();

contexto.moveTo(250, 100);

contexto.lineTo(250, 300);

contexto.stroke();


// braço esquerdo
contexto.beginPath();

contexto.moveTo(250, 100);

contexto.lineTo(190, 150);

contexto.lineTo(270, 170);

contexto.stroke();


// braço direito
contexto.beginPath();

contexto.moveTo(250, 100);

contexto.lineTo(300, 150);

contexto.lineTo(330, 90);

contexto.stroke();


// perna esquerda
contexto.beginPath();

contexto.moveTo(250, 300);

contexto.lineTo(200, 370);

contexto.stroke();


// perna direita
contexto.beginPath();

contexto.moveTo(250, 300);

contexto.lineTo(320, 360);

contexto.stroke();


// continuação da perna esquerda
contexto.beginPath();

contexto.moveTo(200, 370);

contexto.lineTo(200, 450);

contexto.stroke();


// continuação da perna direita
contexto.beginPath();

contexto.moveTo(320, 360);

contexto.lineTo(320, 440);

contexto.stroke();