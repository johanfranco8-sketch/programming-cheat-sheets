# Hoja de trucos de Python

## Variables y tipos

```python
nombre = "Johan"       # str
edad = 20              # int
precio = 19.99         # float
activo = True          # bool
vacio = None           # ausencia de valor
```

```python
type(nombre)           # <class 'str'>
int("42")             # 42
str(42)                # "42"
float("3.14")         # 3.14
```

## Operadores

```python
# Aritméticos: +  -  *  /  //  %  **
resultado = 10 // 3    # 3, división entera
resto = 10 % 3         # 1
potencia = 2 ** 3      # 8

# Comparación: ==  !=  >  <  >=  <=
# Lógicos: and  or  not
```

## Condicionales

```python
edad = 18

if edad >= 18:
    print("Mayor de edad")
elif edad >= 13:
    print("Adolescente")
else:
    print("Niño")
```

## Bucles

```python
for numero in range(1, 6):
    print(numero)

contador = 0
while contador < 3:
    print(contador)
    contador += 1
```

```python
for indice, valor in enumerate(["a", "b", "c"]):
    print(indice, valor)
```

## Colecciones

```python
# Lista: ordenada y modificable
frutas = ["manzana", "pera"]
frutas.append("uva")
frutas[0] = "mango"

# Tupla: ordenada e inmutable
coordenada = (4, 8)

# Set: sin valores repetidos
etiquetas = {"python", "git", "python"}

# Diccionario: clave y valor
usuario = {"nombre": "Johan", "edad": 20}
usuario["ciudad"] = "Bogotá"
print(usuario.get("nombre"))
```

## List comprehensions

```python
cuadrados = [n ** 2 for n in range(1, 6)]
pares = [n for n in range(10) if n % 2 == 0]
```

## Funciones

```python
def saludar(nombre, mensaje="Hola"):
    return f"{mensaje}, {nombre}!"

print(saludar("Johan"))
```

```python
def sumar(*numeros):
    return sum(numeros)

def mostrar_usuario(**datos):
    print(datos)
```

## Archivos

```python
with open("datos.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Hola mundo\n")

with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
```

## Manejo de errores

```python
try:
    numero = int(input("Escribe un número: "))
except ValueError:
    print("Debes escribir un número válido")
finally:
    print("Proceso finalizado")
```

## Entornos virtuales

```bash
python -m venv .venv
# Windows PowerShell
.venv\Scripts\Activate.ps1
# macOS / Linux
source .venv/bin/activate
pip install nombre-paquete
pip freeze > requirements.txt
```
