const guides = [
  { id: 'python-cheat-sheet', path: 'python/cheat-sheet.md', tech: 'Python', title: 'Cheat Sheet', icon: 'Py', description: 'Sintaxis, estructuras y conceptos esenciales de Python.' },
  { id: 'python-quick-reference', path: 'python/quick-reference.md', tech: 'Python', title: 'Quick Reference', icon: 'Py', description: 'Referencia rápida para consultar comandos de Python.' },
  { id: 'javascript-cheat-sheet', path: 'javascript/cheat-sheet.md', tech: 'JavaScript', title: 'Cheat Sheet', icon: 'JS', description: 'Fundamentos y sintaxis útil de JavaScript.' },
  { id: 'html-cheat-sheet', path: 'html/cheat-sheet.md', tech: 'HTML', title: 'Cheat Sheet', icon: 'HT', description: 'Etiquetas y estructura para crear páginas web.' },
  { id: 'bash-powershell-cheat-sheet', path: 'bash-powershell/cheat-sheet.md', tech: 'Bash & PowerShell', title: 'Cheat Sheet', icon: '$_', description: 'Comandos de terminal y automatización.' }
];

const state = { currentGuide: null, rawHtml: '' };
const $ = (selector) => document.querySelector(selector);
const els = {
  nav: $('#guide-nav'), cards: $('#guide-cards'), count: $('#guide-count'), home: $('#home-view'), document: $('#document-view'), empty: $('#empty-view'), content: $('#markdown-content'), title: $('#document-title'), description: $('#document-description'), breadcrumb: $('#breadcrumb'), source: $('#source-link'), toc: $('#toc-links'), search: $('#search-input'), status: $('#search-status'), sidebar: $('#sidebar'), menu: $('#menu-button'), overlay: $('#overlay'), theme: $('#theme-toggle')
};

marked.setOptions({ gfm: true, breaks: false });

function groupByTechnology() {
  return guides.reduce((groups, guide) => {
    (groups[guide.tech] ||= []).push(guide);
    return groups;
  }, {});
}

function renderNavigation() {
  const groups = groupByTechnology();
  els.nav.innerHTML = `<a class="nav-link" href="#home"><span class="nav-icon">⌂</span>Inicio</a>` + Object.entries(groups).map(([technology, items]) => `
    <div class="nav-group">
      <span class="nav-group-label">${technology.toUpperCase()}</span>
      ${items.map(item => `<a class="nav-link guide-link" href="#${item.id}" data-guide="${item.id}"><span class="nav-icon">${item.icon}</span>${item.title}</a>`).join('')}
    </div>`).join('');
}

function renderCards() {
  els.count.textContent = `${guides.length} referencias`;
  els.cards.innerHTML = guides.map(guide => `
    <a class="guide-card" href="#${guide.id}">
      <span class="card-icon">${guide.icon}</span>
      <h3>${guide.tech}</h3>
      <p>${guide.title} · ${guide.description}</p>
      <span class="card-meta">Abrir guía →</span>
    </a>`).join('');
}

function setActiveLink(id) {
  document.querySelectorAll('.guide-link').forEach(link => link.classList.toggle('active', link.dataset.guide === id));
}

function showView(view) {
  els.home.hidden = view !== 'home';
  els.document.hidden = view !== 'document';
  els.empty.hidden = view !== 'empty';
}

function slugify(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

function addHeadingIds() {
  const used = new Set();
  els.content.querySelectorAll('h1, h2, h3').forEach(heading => {
    let id = slugify(heading.textContent) || 'seccion';
    let number = 2;
    while (used.has(id) || document.getElementById(id)) id = `${slugify(heading.textContent)}-${number++}`;
    used.add(id);
    heading.id = id;
  });
}

function buildToc() {
  const headings = [...els.content.querySelectorAll('h2, h3')];
  els.toc.innerHTML = headings.length ? headings.map(heading => `<a class="toc-${heading.tagName.toLowerCase()}" href="#${state.currentGuide.id}--${heading.id}" data-anchor="${heading.id}">${heading.textContent}</a>`).join('') : '<span class="toc-empty">Sin secciones</span>';
  els.toc.querySelectorAll('[data-anchor]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.getElementById(link.dataset.anchor);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function enhanceCodeBlocks() {
  els.content.querySelectorAll('pre code').forEach(code => {
    hljs.highlightElement(code);
    const pre = code.parentElement;
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    const button = document.createElement('button');
    button.className = 'copy-code';
    button.type = 'button';
    button.textContent = 'Copiar';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = '¡Copiado!';
        setTimeout(() => { button.textContent = 'Copiar'; }, 1600);
      } catch {
        button.textContent = 'No disponible';
        setTimeout(() => { button.textContent = 'Copiar'; }, 1600);
      }
    });
    wrapper.appendChild(button);
  });
}

function clearSearch() {
  els.search.value = '';
  els.status.textContent = '';
}

function renderGuide(guide, markdown) {
  state.currentGuide = guide;
  state.rawHtml = marked.parse(markdown);
  els.title.textContent = `${guide.tech} · ${guide.title}`;
  els.description.textContent = guide.description;
  els.breadcrumb.textContent = `${guide.tech} / ${guide.title}`;
  els.source.href = `https://github.com/johanfranco8-sketch/programming-cheat-sheets.github.io/blob/main/${guide.path}`;
  els.content.innerHTML = state.rawHtml;
  addHeadingIds();
  buildToc();
  enhanceCodeBlocks();
  clearSearch();
  showView('document');
  setActiveLink(guide.id);
}

async function loadGuide(id) {
  const guide = guides.find(item => item.id === id);
  if (!guide) return showMissing();
  try {
    els.content.innerHTML = '<p class="loading">Cargando la guía…</p>';
    showView('document');
    const response = await fetch(encodeURI(guide.path));
    if (!response.ok) throw new Error('Archivo no encontrado');
    renderGuide(guide, await response.text());
    const anchor = location.hash.split('--')[1];
    if (anchor) setTimeout(() => document.getElementById(anchor)?.scrollIntoView(), 50);
  } catch (error) {
    showMissing();
  }
}

function showHome() {
  state.currentGuide = null;
  clearSearch();
  setActiveLink('');
  showView('home');
}

function showMissing() {
  state.currentGuide = null;
  clearSearch();
  setActiveLink('');
  showView('empty');
}

function handleRoute() {
  closeMenu();
  const route = decodeURIComponent(location.hash.slice(1)).split('--')[0];
  if (!route || route === 'home') showHome();
  else loadGuide(route);
}

function highlightSearch(query) {
  if (!state.currentGuide) return;
  const normalized = query.trim();
  els.content.innerHTML = state.rawHtml;
  if (normalized) {
    const walker = document.createTreeWalker(els.content, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const matcher = new RegExp(`(${escaped})`, 'gi');
    let matches = 0;
    nodes.forEach(node => {
      if (!node.parentElement || ['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) return;
      if (!matcher.test(node.nodeValue)) return;
      matcher.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(matcher).forEach((part, index) => {
        if (index % 2) { const mark = document.createElement('mark'); mark.textContent = part; fragment.appendChild(mark); matches++; }
        else fragment.appendChild(document.createTextNode(part));
      });
      node.parentNode.replaceChild(fragment, node);
    });
    els.status.textContent = matches ? `${matches} coincidencia${matches === 1 ? '' : 's'} para “${normalized}”.` : `No hay coincidencias para “${normalized}”.`;
  } else els.status.textContent = '';
  addHeadingIds();
  buildToc();
  enhanceCodeBlocks();
}

function closeMenu() {
  els.sidebar.classList.remove('open');
  els.menu.setAttribute('aria-expanded', 'false');
  els.overlay.hidden = true;
}

function initTheme() {
  const saved = localStorage.getItem('cheat-sheets-theme');
  const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  els.theme.textContent = dark ? '☾' : '☼';
}

els.search.addEventListener('input', event => highlightSearch(event.target.value));
els.menu.addEventListener('click', () => {
  const open = !els.sidebar.classList.contains('open');
  els.sidebar.classList.toggle('open', open);
  els.menu.setAttribute('aria-expanded', String(open));
  els.overlay.hidden = !open;
});
els.overlay.addEventListener('click', closeMenu);
els.theme.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('cheat-sheets-theme', next);
  els.theme.textContent = next === 'dark' ? '☾' : '☼';
});
window.addEventListener('hashchange', handleRoute);

initTheme();
renderNavigation();
renderCards();
handleRoute();
