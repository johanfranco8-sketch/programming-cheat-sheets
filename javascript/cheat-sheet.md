# Hoja de trucos de JavaScript

## Variables y tipos

```javascript
const nombre = "Johan";     // No se reasigna
let puntaje = 0;              // Puede cambiar
var antiguo = "Evitar";      // Ámbito menos predecible

const activo = true;
const vacio = null;
let indefinido;
```

## Plantillas y operadores

```javascript
const saludo = `Hola, ${nombre}`;
const resto = 10 % 3;
const potencia = 2 ** 3;

// Usa comparación estricta
console.log(5 === "5"); // false
```

## Condicionales y bucles

```javascript
const edad = 18;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

## Arreglos

```javascript
const numeros = [1, 2, 3, 4];

numeros.push(5);
const dobles = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const suma = numeros.reduce((acumulado, n) => acumulado + n, 0);
const encontrado = numeros.find(n => n > 3);
```

## Objetos y desestructuración

```javascript
const usuario = { nombre: "Johan", ciudad: "Bogotá" };

console.log(usuario.nombre);
usuario.activo = true;

const { nombre, ciudad } = usuario;
const copia = { ...usuario, rol: "admin" };
```

## Funciones

```javascript
function sumar(a, b) {
  return a + b;
}

const saludar = (nombre = "visitante") => `Hola, ${nombre}`;
```

## DOM y eventos

```html
<button id="boton">Haz clic</button>
<p id="mensaje"></p>
```

```javascript
const boton = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Evento ejecutado!";
});
```

## JSON y almacenamiento local

```javascript
const datos = { tema: "JavaScript", nivel: "básico" };
localStorage.setItem("curso", JSON.stringify(datos));

const curso = JSON.parse(localStorage.getItem("curso"));
localStorage.removeItem("curso");
```

## Asincronía y fetch

```javascript
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://api.example.com/users");
    if (!respuesta.ok) throw new Error("Error en la solicitud");

    const usuarios = await respuesta.json();
    console.log(usuarios);
  } catch (error) {
    console.error(error.message);
  }
}
```
