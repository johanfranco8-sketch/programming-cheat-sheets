# Hoja de trucos de SQL

> La sintaxis puede variar ligeramente entre PostgreSQL, MySQL, SQLite y SQL Server.

## Consultar y filtrar

```sql
SELECT id, nombre, precio
FROM productos
WHERE precio >= 100
  AND categoria = 'tecnología'
ORDER BY precio DESC
LIMIT 10;
```

## Insertar, actualizar y borrar

```sql
INSERT INTO productos (nombre, precio) VALUES ('Teclado', 120);

UPDATE productos
SET precio = 110
WHERE id = 1;

DELETE FROM productos
WHERE id = 1;
```

## Agregaciones

```sql
SELECT categoria,
       COUNT(*) AS cantidad,
       AVG(precio) AS precio_promedio
FROM productos
GROUP BY categoria
HAVING COUNT(*) >= 2;
```

## JOIN

```sql
SELECT pedidos.id, clientes.nombre, pedidos.total
FROM pedidos
INNER JOIN clientes ON clientes.id = pedidos.cliente_id;

SELECT clientes.nombre, pedidos.total
FROM clientes
LEFT JOIN pedidos ON pedidos.cliente_id = clientes.id;
```

## Crear tablas

```sql
CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(150) UNIQUE NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Seguridad

- Usa consultas parametrizadas desde tu lenguaje de programación; no construyas SQL concatenando entrada de usuarios.
- Ejecuta `UPDATE` y `DELETE` con `WHERE` y verifica primero con un `SELECT`.
- Limita permisos por usuario y conserva copias de seguridad antes de cambios masivos.
