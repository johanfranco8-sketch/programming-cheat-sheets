# Hoja de trucos de CSS

## Selectores

```css
* { box-sizing: border-box; }
p { color: #1f2937; }
.tarjeta { padding: 1rem; }
#encabezado { background: #0f172a; }
input[type="email"] { border-color: #2563eb; }
nav a:hover { color: tomato; }
```

## Box Model

```css
.caja {
  width: 320px;
  max-width: 100%;
  margin: 1rem auto;
  padding: 1.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
}
```

## Colores y tipografía

```css
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(31, 41, 55);
  background-color: #f8fafc;
}

title {
  font-weight: 700;
  letter-spacing: 0.02em;
}
```

## Flexbox

```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.elemento {
  flex: 1 1 220px;
}
```

## CSS Grid

```css
.rejilla {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.destacado {
  grid-column: span 2;
}
```

## Posicionamiento

```css
.relativo { position: relative; }
.absoluto { position: absolute; top: 0; right: 0; }
.fijo { position: fixed; bottom: 1rem; right: 1rem; }
.pegajoso { position: sticky; top: 0; }
```

## Responsive design

```css
.imagen {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
    align-items: stretch;
  }

  .destacado {
    grid-column: span 1;
  }
}
```

## Variables y estados

```css
:root {
  --primario: #2563eb;
  --radio: 0.5rem;
}

.boton {
  background: var(--primario);
  color: white;
  border: 0;
  border-radius: var(--radio);
  padding: 0.75rem 1rem;
  cursor: pointer;
}

.boton:hover { filter: brightness(0.9); }
.boton:focus-visible { outline: 3px solid #93c5fd; }
```

## Transiciones y animaciones

```css
.tarjeta {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.12);
}

@keyframes aparecer {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```
