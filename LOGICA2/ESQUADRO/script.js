var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.beginPath();
pincel.fillStyle = 'black';

pincel.moveTo(50,50);
pincel.lineTo(50,400);
pincel.lineTo(400,400);

pincel.fill();

pincel.beginPath();
pincel.fillStyle = 'white';

pincel.moveTo(100,175);
pincel.lineTo(100,350);
pincel.lineTo(275,350);

pincel.fill();