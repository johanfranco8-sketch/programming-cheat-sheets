# Hoja de trucos de HTML

## Documento base

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descripción breve de la página">
  <title>Título de la página</title>
</head>
<body>
  <main>
    <h1>Contenido principal</h1>
  </main>
</body>
</html>
```

## Texto y estructura

```html
<header>Cabecera</header>
<nav aria-label="Navegación principal"><a href="#inicio">Inicio</a></nav>
<main>
  <section>
    <h2>Sección</h2>
    <p>Un párrafo con <strong>importancia</strong> y <em>énfasis</em>.</p>
    <ul><li>Elemento</li></ul>
  </section>
</main>
<footer>Pie de página</footer>
```

## Enlaces e imágenes

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Abrir sitio</a>
<img src="imagen.jpg" alt="Descripción útil de la imagen" width="640" height="360">
```

## Formularios

```html
<form action="/registro" method="post">
  <label for="correo">Correo</label>
  <input id="correo" name="correo" type="email" required autocomplete="email">

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="mensaje" rows="4"></textarea>

  <button type="submit">Enviar</button>
</form>
```

## Tablas

```html
<table>
  <caption>Ventas mensuales</caption>
  <thead><tr><th scope="col">Mes</th><th scope="col">Total</th></tr></thead>
  <tbody><tr><td>Enero</td><td>10</td></tr></tbody>
</table>
```

## Accesibilidad esencial

- Usa elementos semánticos: `header`, `nav`, `main`, `section`, `article` y `footer`.
- Usa un `h1` principal y mantén un orden lógico de encabezados.
- Da texto `alt` significativo a imágenes informativas.
- Conecta cada control de formulario con un `label`.
- No uses un `div` o `span` como botón cuando un `button` sirve.
