const buscador = document.querySelector('#buscador');
const tarjetas = [...document.querySelectorAll('.card')];
const resultado = document.querySelector('#resultado');
const sinResultados = document.querySelector('#sin-resultados');

function filtrar() {
  const termino = buscador.value.trim().toLowerCase();
  let visibles = 0;

  tarjetas.forEach((tarjeta) => {
    const coincide = tarjeta.dataset.search.includes(termino);
    tarjeta.hidden = !coincide;
    if (coincide) visibles += 1;
  });

  resultado.textContent = `${visibles} ${visibles === 1 ? 'tecnología disponible' : 'tecnologías disponibles'}`;
  sinResultados.hidden = visibles !== 0;
}

buscador.addEventListener('input', filtrar);
