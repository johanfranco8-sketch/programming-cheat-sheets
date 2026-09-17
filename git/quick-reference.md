# Git: referencia de un minuto

```bash
# Primera vez
git clone URL
git config --global user.name "Tu nombre"
git config --global user.email "correo@ejemplo.com"

# Guardar cambios
git status
git add .
git commit -m "tipo: descripción"
git pull --rebase origin main
git push origin main

# Ramas
git switch -c mi-rama
git switch main
git merge mi-rama

# Recuperar
git restore archivo.txt
git restore --staged archivo.txt
git stash && git stash pop
```

Antes de `push`, verifica `git status`. Evita añadir secretos y usa `.gitignore`.
