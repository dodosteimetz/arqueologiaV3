import { store } from './store.js';
import renderOverview from './tabs/overview.js';
import renderMysteries from './tabs/mysteries.js';
import renderArtefacts from './tabs/artefacts.js';
import renderCollections from './tabs/collections.js';
import renderResearch from './tabs/research.js';

const tabContent = document.getElementById('tab-content');
const levelInput = document.getElementById('level-input');
const levelDisplay = document.getElementById('current-level-display');
const tabButtons = document.querySelectorAll('.tab-btn');

let currentTab = 'overview';

// Atualizar Input
levelInput.value = store.level;
levelDisplay.textContent = store.level;

levelInput.addEventListener('input', (e) => {
    const val = e.target.value;
    levelDisplay.textContent = val;
    store.setLevel(val);
});

// Trocar de Aba
tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentTab = e.currentTarget.dataset.tab;
        updateTabUI();
        renderCurrentTab();
    });
});

function updateTabUI() {
    tabButtons.forEach(btn => {
        if (btn.dataset.tab === currentTab) {
            btn.className = "tab-btn px-4 py-2 bg-yellow-500 text-black font-bold rounded-md";
        } else {
            btn.className = "tab-btn px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-md";
        }
    });
}

function renderCurrentTab() {
    tabContent.innerHTML = ''; // Limpar aba
    switch (currentTab) {
        case 'overview': renderOverview(tabContent); break;
        case 'mysteries': renderMysteries(tabContent); break;
        case 'artefacts': renderArtefacts(tabContent); break;
        case 'collections': renderCollections(tabContent); break;
        case 'research': renderResearch(tabContent); break;
    }
}

// Re-renderizar quando o store atualizar (nível mudar ou item for marcado)
store.subscribe(() => {
    renderCurrentTab();
});

// Iniciar app
updateTabUI();
renderCurrentTab();

// Torna o toggle disponível globalmente para os botões no HTML
window.toggleItem = (id) => {
    store.toggleDone(id);
};
