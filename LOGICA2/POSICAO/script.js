function exibeAlerta(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;
  alert("posição do clique : " + x + ", " + y);
}
function exibeAlerta(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  pincel.fillStyle="blue";
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2*3.14);
  pincel.fill();

  console.log("posição do clique : " + x + ", " + y);

function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  pincel.fillStyle="blue";
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2*3.14);
  pincel.fill();

  console.log("posição do clique : " + x + ", " + y);
}


tela.onclick = desenhaCirculo;