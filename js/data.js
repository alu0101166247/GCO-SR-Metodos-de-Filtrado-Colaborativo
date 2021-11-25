let myMatrix

function predecir() {

  // Validaciones

  var num = document.getElementById('num_vecinos').value;
  var metrica = document.getElementById('metrica').value;
  var prediccion = document.getElementById('prediccion').value;

  mostrarMatriz(myMatrix, 2);
}

function read(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      myMatrix = contents.split("\n");
      for (x in myMatrix) {
        myMatrix[x] = myMatrix[x].split(" ");
      }
      mostrarMatriz(myMatrix, 1);
    };
    reader.readAsText(input.files[0]);
  }
}

function mostrarMatriz(matriz, lado) {
  let out = "";
  if (lado == 1)
    var elemento = document.getElementById('matrizOriginal');
  if (lado == 2)
    var elemento = document.getElementById('matrizNueva');
  for (x in matriz) {
    for (y in matriz[x]) {
      out += matriz[x][y] + " ";
      console.log(matriz[x][y]);
    }
    out += "<br>";
  }
  elemento.innerHTML = out;
}

function mostrarContenido(contenido) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}