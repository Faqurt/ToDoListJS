/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************!*\
  !*** ./app.js ***!
  \****************/
// Boton eliminar en cada tarea de la lista
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\xD7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
} // Click en el boton de cerrar para ocultar la tarea


var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
} // "tick" en la tarea lista


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); // Crear nueva tarea en el lista al tocar boton agregar

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Error, ingrese su tarea nuevamente!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\xD7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map