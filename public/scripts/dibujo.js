
	//======================================================================
// VARIABLES
//======================================================================
let miCanvas = document.querySelector('#pizarra');
let lineas = [];
let correccionX = 0;
let correccionY = 0;
let pintarLinea = false;

let posicion = miCanvas.getBoundingClientRect();
correccionX = posicion.x;
correccionY = posicion.y;

miCanvas.width = 350;
miCanvas.height = 350;

//======================================================================
// FUNCIONES
//======================================================================

/**
 * Funcion que empieza a dibujar la linea
 */
function empezarDibujo () {
    pintarLinea = true;
    lineas.push([]);
};

/**
 * Funcion dibuja la linea
 */
let ctx = miCanvas.getContext('2d')
function dibujarLinea (event) {
    event.preventDefault();
    if (pintarLinea) {
        
        // Estilos de linea
        ctx.lineJoin = ctx.lineCap = 'round';
        var day = document.querySelector('.modal-content');
        
        ctx.lineWidth = 2;

  if(day.style.background!="rgb(52, 61, 91)"){
ctx.strokeStyle = '#000000';
  }else{
ctx.strokeStyle = '#fff';
  }
         
    
        // Color de la linea
       // ctx.strokeStyle = '#000000';
        // Marca el nuevo punto
        let nuevaPosicionX = 0;
        let nuevaPosicionY = 0;
        if (event.changedTouches == undefined) {
            // Versión ratón
            
            nuevaPosicionX = event.layerX;
            nuevaPosicionY = event.layerY;
        } else {
            // Versión touch, pantalla tactil
            nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
            nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
        }
        // Guarda la linea
        lineas[lineas.length - 1].push({
            x: nuevaPosicionX,
            y: nuevaPosicionY
        });
        // Redibuja todas las lineas guardadas
        ctx.beginPath();
        lineas.forEach(function (segmento) {
            ctx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function (punto, index) {
                ctx.lineTo(punto.x, punto.y);
            });
        });
        ctx.stroke();
    }
}
function dibujarLinea2 (event) {
    event.preventDefault();
    if (pintarLinea) {
var day = document.querySelector('.modal-content');
        // Estilos de linea
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.lineWidth = 2;
        // Color de la linea
         if(day.style.background!="rgb(52, 61, 91)"){
ctx.strokeStyle = '#000000';
  }else{
ctx.strokeStyle = '#fff';
  }
        // Marca el nuevo punto
        let nuevaPosicionX = 0;
        let nuevaPosicionY = 0;
        if (event.changedTouches == undefined) {
            // Versión ratón
            nuevaPosicionX = event.layerX;
            nuevaPosicionY = event.layerY;
        } else {

            // Versión touch, pantalla tactil
            nuevaPosicionX = event.targetTouches[0].clientX - correccionX;
            nuevaPosicionY = event.targetTouches[0].clientY - correccionY;
        }
        // Guarda la linea
        lineas[lineas.length - 1].push({
            x: nuevaPosicionX-50,
            y: nuevaPosicionY-80
        });
        // Redibuja todas las lineas guardadas
        ctx.beginPath();
        lineas.forEach(function (segmento) {
            ctx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function (punto, index) {
                ctx.lineTo(punto.x, punto.y);
            });
        });
        ctx.stroke();
    }
}

/**
 * Funcion que deja de dibujar la linea
 */
function pararDibujar () {
    pintarLinea = false;
}
function doble(){

}
//======================================================================
// EVENTOS
//======================================================================

// Eventos raton
miCanvas.addEventListener('mousedown', empezarDibujo, false);
miCanvas.addEventListener('dblclick', doble, false);
miCanvas.addEventListener('mousemove', dibujarLinea, false);
miCanvas.addEventListener('mouseup', pararDibujar, false);

// Eventos pantallas táctiles
miCanvas.addEventListener('touchstart', empezarDibujo, false);
miCanvas.addEventListener('touchcancel', empezarDibujo, false);
miCanvas.addEventListener('touchmove', dibujarLinea2, false);

function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataURL("image/png");
  return image;
}
$(document).ready(function(){
  var socket = io();
   anadirDibujo(socket);
  
});
var btnborrar=document.querySelector('#btnborrar');
btnborrar.addEventListener('click',function(){
  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height );
  lineas.length=0;
});
var btncancelar=document.querySelector('#btncancelar');
btncancelar.addEventListener('click',function(){
  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height );
  lineas.length=0;
});
var btncerrar=document.querySelector('#btncerrar');
btncerrar.addEventListener('click',function(){
  ctx.clearRect(0, 0, miCanvas.width, miCanvas.height );
  lineas.length=0;
});
function anadirDibujo(socket){
var btnenviar=document.querySelector('#btnenviar');
btnenviar.addEventListener('click',function(){
  
	var createimage=document.createElement('img');
	createimage=convertCanvasToImage(miCanvas);
  var dateTime=moment().format('hh:mm a').toUpperCase();
socket.emit('sendMessage',{     
            sessionId: sessionStorage.roomId,    
            username: sessionStorage.username,
            message: '',
            date:dateTime,
            imagen:'',
            dibujo: createimage.src
        });
        ctx.clearRect(0, 0, miCanvas.width, miCanvas.height );
        lineas.length=0;
//	document.body.appendChild(createimage);

});

}
