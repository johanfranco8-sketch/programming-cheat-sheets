# Hoja de trucos de TypeScript

## Tipos básicos

```ts
const nombre: string = "Johan";
let edad: number = 20;
let activo: boolean = true;
let etiquetas: string[] = ["web", "typescript"];
```

## Objetos e interfaces

```ts
interface Usuario {
  id: number;
  nombre: string;
  correo?: string;
}

const usuario: Usuario = { id: 1, nombre: "Johan" };
```

## Uniones y funciones

```ts
type Estado = "pendiente" | "completado";

function mostrarEstado(estado: Estado): string {
  return `Estado: ${estado}`;
}
```

## Genéricos

```ts
function primerElemento<T>(items: T[]): T | undefined {
  return items[0];
}

const primero = primerElemento<number>([1, 2, 3]);
```

## Tipos útiles

```ts
type UsuarioParcial = Partial<Usuario>;
type UsuarioSinId = Omit<Usuario, "id">;
type SoloNombre = Pick<Usuario, "nombre">;
```

## Configuración y ejecución

```bash
npm install -D typescript
npx tsc --init
npx tsc archivo.ts
```

> TypeScript valida tipos durante el desarrollo y se compila a JavaScript para ejecutarse en el navegador o Node.js.
