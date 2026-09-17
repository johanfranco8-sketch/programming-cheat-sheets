# Hoja de trucos de Git

## Configuración inicial

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@ejemplo.com"
git config --global init.defaultBranch main
git config --list
```

## Crear o clonar un repositorio

```bash
git init
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

## Flujo diario

```bash
git status
git add archivo.txt
git add .
git commit -m "feat: agrega nueva función"
git log --oneline
git push origin main
git pull origin main
```

## Ramas

```bash
git branch
git branch nueva-funcion
git switch nueva-funcion
# Crear y cambiar en un solo paso
git switch -c nueva-funcion

# Unir una rama a la rama actual
git switch main
git merge nueva-funcion

# Eliminar una rama local
git branch -d nueva-funcion
```

## Remotos

```bash
git remote -v
git remote add origin https://github.com/usuario/repositorio.git
git remote set-url origin https://github.com/usuario/nuevo-repositorio.git
git push -u origin main
```

## Revisar cambios

```bash
git diff
git diff --staged
git show HEAD
git log --oneline --graph --all
```

## Guardar trabajo temporalmente

```bash
git stash
git stash list
git stash pop
```

## Deshacer cambios

```bash
# Quitar un archivo del área de preparación sin borrar cambios
git restore --staged archivo.txt

# Descartar cambios locales no confirmados
git restore archivo.txt

# Crear un commit que revierte otro commit
git revert ID_DEL_COMMIT
```

## Archivo .gitignore

```gitignore
# Dependencias
node_modules/
.venv/

# Variables de entorno y secretos
.env
*.pem

# Archivos del sistema
.DS_Store
Thumbs.db
```

> Nunca subas contraseñas, tokens ni archivos `.env` al repositorio.
