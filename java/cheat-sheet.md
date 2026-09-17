# Hoja de trucos de Java

## Programa básico

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hola, mundo");
  }
}
```

## Tipos, condicionales y bucles

```java
String nombre = "Johan";
int edad = 20;
double precio = 19.99;
boolean activo = true;

if (edad >= 18) {
  System.out.println("Mayor de edad");
}

for (int i = 0; i < 3; i++) {
  System.out.println(i);
}
```

## Métodos y clases

```java
class Usuario {
  private String nombre;

  public Usuario(String nombre) {
    this.nombre = nombre;
  }

  public String saludar() {
    return "Hola, " + nombre;
  }
}
```

```java
static int sumar(int a, int b) {
  return a + b;
}
```

## Colecciones

```java
import java.util.ArrayList;
import java.util.HashMap;

ArrayList<String> tareas = new ArrayList<>();
tareas.add("Estudiar Java");

HashMap<String, Integer> puntajes = new HashMap<>();
puntajes.put("Johan", 100);
```

## Excepciones

```java
try {
  int numero = Integer.parseInt("42");
} catch (NumberFormatException error) {
  System.out.println("Número inválido");
}
```

## Compilar y ejecutar

```bash
javac Main.java
java Main
```
