var area = document.getElementById("canvasId"); //Obtiene el Canvas
var papel = area.getContext("2d"); //Obtiene el renderizado 2d del Canvas

var defaultLocation = "D:\1 Ing. Software con AI\Platzi\1 PBasica\5 villaplatzi\Muestra //Localizacion por defecto de la carpeta donde estan las imagenes
var mapaLocation = defaultLocation + "tile.jpg"; //Nombre del archivo del mapa de la Villa
var vacaLocation = defaultLocation + "vaca.jpg"; //Nombre del archivo de la Vaca
var cerdoLocation = defaultLocation + "cerdo.png"; //Nombre del archivo del Cerdo
var polloLocation = defaultLocation + "pollo.jpg"; //Nombre del archivo del Pollo
var loboLocation = defaultLocation + "lobo.png"; //Nombre del archivo del Lobo


var xVaca = []; //Almacena la coordenada x de cada Vaca
var yVaca = []; //Almacena la coordenada y de cada Vaca

var xCerdo = []; //Almacena la coordenada x de cada Cerdo
var yCerdo = []; //Almacena la coordenada y de cada Cerdo

var xPollo = []; //Almacena la coordenada x de cada Pollo
var yPollo = []; //Almacena la coordenada y de cada Pollo

var xLobo; //Definimos la variable x del Lobo
var yLobo; //Definimos la variable y del Lobo


var teclas = { //Definimos el keyCode de las teclas de las flechas
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
}

var mapa = { //Definimos y otorgamos atributos al mapa de la Villa
    url: mapaLocation,
    cargaStatus: false
}

var vaca = { //Definimos y otorgamos atributos a la Vaca
    url: vacaLocation,
    cargaStatus: false
}

var cerdo = { //Definimos y otorgamos atributos al Cerdo
    url: cerdoLocation,
    cargaStatus: false
}

var pollo = { //Definimos y otorgamos atributos al Pollo
    url: polloLocation,
    cargaStatus: false
}

var lobo = { //Definimos y otorgamos atributos al Lobo
    url: loboLocation,
    cargaStatus: false,
}


var rangoVacas = { //Definimos el rango menor y mayor de Vacas para el número aleatorio
    menor: 1,
    mayor: 6
}

var rangoCerdos = { //Definimos el rango menor y mayor de Cerdos para el número aleatorio
    menor: 1,
    mayor: 6
}

var rangoPollos = { //Definimos el rango menor y mayor de Pollos para el número aleatorio
    menor: 1,
    mayor: 6
}

var movimiento = 20; //Definimos la cantidad de bloques que se movera el Lobo al ser movido por las teclas

var ancho = 500; //Definimos el ancho del Canvas
var alto = 500; //Definimos el alto del Canvas

var colorBorde = "black"; //Definimos el color del borde


mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);


function cargarMapa(){
    mapa.cargaStatus = true;
    dibujar()
}


function cargarVaca(){
    vaca.cargaStatus = true;
    dibujar()
}


function cargarCerdo(){
    cerdo.cargaStatus = true;
    dibujar()
}


function cargarPollo(){
    pollo.cargaStatus = true;
    dibujar()
}


function cargarLobo(){
    lobo.cargaStatus = true;
    dibujar()
}


function dibujar(){
    if(mapa.cargaStatus){
        papel.drawImage(mapa.imagen, 0, 0) //Dibujamos el mapa
    }

    if(vaca.cargaStatus){
        var cantidadVacas = aleatorio(rangoVacas.menor, rangoVacas.mayor); //Hallamos la cantidad de Vacas que habran aleatoriamente dependiendo del rango que le otorgemos
        xVaca = []; //Reiniciamos el array que contiene la posicion x de cada Vaca
        yVaca = []; //Reiniciamos el array que contiene la posicion y de cada Vaca
        for(var v = 0; v < cantidadVacas; v = v + 1){
            var x = aleatorio(0, 10.5);
            var y = aleatorio(-0.4, 10.325);
            var x = x * 38.1;
            var y = y * 40.5;
            papel.drawImage(vaca.imagen, x, y) //Dibujamos la Vaca con las posiciones aleatorias
            xVaca.push(x); //Almacenamos la posicion x de la Vaca
            yVaca.push(y); //Almacenamos la posicion Y de la Vaca
        }
    }

    if(cerdo.cargaStatus){
        var cantidadCerdos = aleatorio(rangoCerdos.menor, rangoCerdos.mayor);
        xCerdo = [];
        yCerdo = [];
        for(var v = 0; v < cantidadCerdos; v = v + 1){
            var x = aleatorio(0, 5.83);
            var y = aleatorio(-0.4, 8);
            var x = x * 71;
            var y = y * 50;
            papel.drawImage(cerdo.imagen, x, y)
            xCerdo.push(x);
            yCerdo.push(y);
        }
    }

    if(pollo.cargaStatus){
        var cantidadPollos = aleatorio(rangoPollos.menor, rangoPollos.mayor);
        xPollo = [];
        yPollo = [];
        for(var v = 0; v < cantidadPollos; v = v + 1){
            var x = aleatorio(0, 5);
            var y = aleatorio(-0.1, 10);
            var x = x * 85;
            var y = y * 40;
            papel.drawImage(pollo.imagen, x, y)
            xPollo.push(x);
            yPollo.push(y);
        }
    }

    if(lobo.cargaStatus){
        for(var v = 0; v <1; v = v + 1){ //Definimos que el Lobo solo se dibuje 1 vez
            var x = aleatorio(0, 5); //Le otorgamos una posicion x aleatoria
            var y = aleatorio(-0.1, 10); //Le otorgamos una posicion y aleatoria
            var x = x * 85;
            var y = y * 40;
            xLobo = x; //Guardamos la posicion x del Lobo
            yLobo = y; //Guardamos la posicion y del Lobo
            papel.drawImage(lobo.imagen, x, y) //Dibujamos el Lobo
        }
    }
    dibujarBorde(); //Dibujamos el borde cuando todo haya cargado
}


function dibujarLobo(tecla){ //funcion que se activa al detectar una tecla oprimida del teclado
    if(yLobo - movimiento > -5){
        if(tecla.keyCode == teclas.UP){ //Si se oprime la tecla Flecha Arriba, actualiza la posicion nueva del Lobo. Tambien, evitara que el Lobo se salga del Canvas
            yLobo = yLobo - movimiento;
        }
    reiniciarDibujo();
    }

    if(yLobo + movimiento < 457){ //Si se oprime la tecla Flecha Abajo, actualiza la posicion nueva del Lobo. Tambien, evitara que el Lobo se salga del Canvas
        if(tecla.keyCode == teclas.DOWN){
            yLobo = yLobo + movimiento;
        }
    reiniciarDibujo();
    }

    if(xLobo + movimiento < 451){ //Si se oprime la tecla Flecha Derecha, actualiza la posicion nueva del Lobo. Tambien, evitara que el Lobo se salga del Canvas
        if(tecla.keyCode == teclas.RIGHT){
            xLobo = xLobo + movimiento;
        }
    reiniciarDibujo();
    }

    if(xLobo - movimiento > -1){ //Si se oprime la tecla Flecha Izquierda, actualiza la posicion nueva del Lobo. Tambien, evitara que el Lobo se salga del Canvas
        if(tecla.keyCode == teclas.LEFT){
            xLobo = xLobo - movimiento;
        }
    reiniciarDibujo();
    }

    if(tecla.keyCode == teclas.SPACE){ //Si se oprime la tecla Espacio refresca la pagina. Funciona para ubicar todo aleatoriamente de nuevo sin necesidad de tener que refrescar la pagina
        location.reload();
    }
}


function reiniciarDibujo(){ //Reinicia el dibujo, dibujando nuevamente el mapa, las vacas, los cerdos, los pollos y el Lobo. Sirve para actualizar el dibujo con la nueva posicion del Lobo
    papel.drawImage(mapa.imagen, 0, 0); //Dibuja el mapa de la Villa

    for(var temp = 0; temp<xVaca.length; temp++){ //Dibuja cada una de las Vacas nuevamente en las posiciones que estaban
        papel.drawImage(vaca.imagen, xVaca[temp], yVaca[temp]);
    }

    for(var temp = 0; temp<xCerdo.length; temp++){ //Dibuja cada uno de los Cerdos nuevamente en las posiciones que estaban
        papel.drawImage(cerdo.imagen, xCerdo[temp], yCerdo[temp]);
    }

    for(var temp = 0; temp<xPollo.length; temp++){ //Dibuja cada uno de los Pollos nuevamente en las posiciones que estaban
        papel.drawImage(pollo.imagen, xPollo[temp], yPollo[temp]);
    }
    papel.drawImage(lobo.imagen, xLobo, yLobo); //Dibuja al Lobo en su nueva posicion
    dibujarBorde();
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    papel.beginPath();
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
}


function dibujarBorde(){
    for(var temp = 0; temp <20; temp++){
    dibujarLinea(colorBorde, area.width - area.width + 1, area.height - area.height + 1, area.width - area.width + 1, area.height - 1);
    dibujarLinea(colorBorde, area.width - area.width + 1, area.height - 1, area.width - 1, area.height - 1);
    dibujarLinea(colorBorde, area.width - 1, area.height - 1, area.width - 1, area.height - area.height + 1);
    dibujarLinea(colorBorde, area.width - 1, area.height - area.height + 1, area.width - area.width + 1, area.height - area.height + 1);
    }
}


function aleatorio(min, max){ //Funcion para calcular numeros completamente aleatorios
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}


function establecerMedidasCanvas(){ //Funcion para establecer el ancho y largo del Canvas, asi dinamicamente podemos cambiar su ancho y largo desde el mismo archivo JavaScript, y podria servir para preguntarle al usuario que ancho y largo deseara para el canvas
    area.setAttribute("width", ancho);
    area.setAttribute("height", alto);
}


establecerMedidasCanvas(); //Invoca la funcion para establecer las medidas del Canvas

alert("Teclas para jugar:\nFlecha Arriba = Mueve el Lobo hacia arriba\nFlecha Abajo = Mueve el Lobo hacia abajo\nFlecha Derecha = Mueve el Lobo hacia la derecha\nFlecha Izquierda = Mueve el Lobo hacia la izquierda\nBarra Espaciadora = Reinicia el juego");


document.addEventListener("keydown", dibujarLobo); //Escuchara cuando una tecla del teclado es oprimida e invoca la funcion para dibujar al Lobo
