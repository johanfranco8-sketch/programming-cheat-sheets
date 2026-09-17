# Hoja de trucos de Bash y PowerShell

## Navegación y archivos

| Acción | Bash | PowerShell |
|---|---|---|
| Ver directorio actual | `pwd` | `Get-Location` o `pwd` |
| Listar archivos | `ls -la` | `Get-ChildItem` o `ls` |
| Entrar a carpeta | `cd carpeta` | `cd carpeta` |
| Crear carpeta | `mkdir proyecto` | `mkdir proyecto` |
| Crear archivo | `touch notas.txt` | `New-Item notas.txt -ItemType File` |
| Copiar | `cp origen destino` | `Copy-Item origen destino` |
| Mover | `mv origen destino` | `Move-Item origen destino` |
| Borrar archivo | `rm archivo.txt` | `Remove-Item archivo.txt` |

## Ver y buscar contenido

```bash
# Bash
cat archivo.txt
grep -R "texto" .
find . -name "*.py"
```

```powershell
# PowerShell
Get-Content archivo.txt
Get-ChildItem -Recurse | Select-String "texto"
Get-ChildItem -Recurse -Filter *.py
```

## Pipes y redirección

```bash
# Bash
ls -la | grep "\.py$"
echo "hola" > salida.txt
echo "otra línea" >> salida.txt
```

```powershell
# PowerShell
Get-ChildItem | Where-Object Name -like "*.py"
"hola" | Out-File salida.txt
"otra línea" | Add-Content salida.txt
```

## Variables y scripts

```bash
# Bash
nombre="Johan"
echo "Hola, $nombre"
chmod +x script.sh
./script.sh
```

```powershell
# PowerShell
$nombre = "Johan"
Write-Output "Hola, $nombre"
.\script.ps1
```

## Git desde la terminal

```bash
git status
git add .
git commit -m "docs: actualiza apuntes"
git push
```

> Revisa dos veces los comandos destructivos como `rm -rf` y `Remove-Item -Recurse -Force` antes de ejecutarlos.
