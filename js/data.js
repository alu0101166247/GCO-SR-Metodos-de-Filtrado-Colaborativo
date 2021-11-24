
function cargarMatriz() {
  var num = document.getElementById('num_vecinos').value;
  var metrica = document.getElementById('metrica').value;
  var prediccion = document.getElementById('prediccion').value;


  document.getElementById("matriz").innerHTML = num + metrica + prediccion;
}