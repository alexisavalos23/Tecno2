class Columnas {

  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2; 
  }


  mostrar() {
    stroke( 97, 105, 110 );
    fill( 183, 183, 158 );
    rect(this.x1, this.y1, this.x2, this.y2);
  }

  mover() {
    if (this.x1 >= width) {
      this.x1 = -this.x2;
    }


  this.y2 += 10;

  }

  actualizarGrosor(mouseY) {
    if (mouseY < height / 2) {
      // Si el mouse se mueve hacia arriba, aumenta el grosor
      this.x2 += 1;
    } else {
      // Si el mouse se mueve hacia abajo, disminuye el grosor
      this.x2 -= 1;
    }

   
  }
}





let columnas = [];
let capa2;
let pincelada = [];
let cantidad = 11;

function preload(){ //cargo las imagenes
  for( let i=0 ; i<cantidad ; i++ ){
    let nombre = "data/pinceladas"+nf(i,2)+".png"; 
    pincelada[i] = loadImage( nombre );
  }
}

function setup() {
  createCanvas( displayWidth, windowHeight );
  background( 97, 105, 110 );
  /*frameRate(30);*/
  for (let i = 0; i < 25; i++) {
    let x = i * 62; // Espacio horizontal entre las columnas
    let columna = new Columnas(x, 0, 50, 50); // Crear un objeto columna en la posición x
    columnas.push(columna); // Agregar el objeto columna al array

  

  }

  capa2 = createGraphics(width, height);
}

function draw() {

  for (let i = 0; i < columnas.length; i++) {
    let columna = columnas[i];
    columna.mostrar();
    columna.actualizarGrosor(mouseY);
    columna.mover();
    
  }

  let cual = capa2.int( random( cantidad ) ); //muevo con el mouse las pinceladas
  let x = capa2.random( mouseX );
  let y = capa2.random( mouseY );
  capa2.image( pincelada[cual] , x, y, 300, 300 ); //tam de los png

  image( capa2, 0, 0 ); 



}
