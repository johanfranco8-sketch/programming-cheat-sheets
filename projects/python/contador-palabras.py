from collections import Counter
import re


def contar_palabras(texto):
    palabras = re.findall(r"[\wáéíóúüñ]+", texto.lower())
    return Counter(palabras)


def main():
    texto = input("Escribe o pega un texto: \n")
    conteo = contar_palabras(texto)

    print(f"\nPalabras totales: {sum(conteo.values())}")
    print(f"Palabras únicas: {len(conteo)}")
    print("\nMás frecuentes:")
    for palabra, cantidad in conteo.most_common(10):
        print(f"- {palabra}: {cantidad}")


if __name__ == "__main__":
    main()
