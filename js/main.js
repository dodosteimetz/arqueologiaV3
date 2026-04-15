import { store } from './store.js';
import renderOverview from './tabs/overview.js';
import renderMysteries from './tabs/mysteries.js';
import renderArtefacts from './tabs/artefacts.js';
import renderCollections from './tabs/collections.js';
import renderResearch from './tabs/research.js';

const tabContent = document.getElementById('tab-content');
const tabButtons = document.querySelectorAll('.tab-btn');

// Novos elementos do HTML
const levelInput = document.getElementById('level-input');
const playerNameInput = document.getElementById('playerName');
const buscarBtn = document.getElementById('buscarBtn');

let currentTab = 'overview';

// 1. Iniciar Input com o valor salvo
levelInput.value = store.level;

// 2. Mudança Manual de Nível
levelInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value);
    if(isNaN(val) || val < 1) val = 1;
    if(val > 120) val = 120; // Cap no 120 para Arqueologia
    store.setLevel(val);
});

// 3. Busca na API do RuneScape
buscarBtn.addEventListener('click', async () => {
    const name = playerNameInput.value.trim();
    if(!name) {
        alert("Digite o nome do jogador.");
        return;
    }

    const origText = buscarBtn.innerHTML;
    buscarBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i>Buscando...';
    buscarBtn.disabled = true;

    try {
        const rsUrl = "https://secure.runescape.com/m=hiscore/index_lite.ws?player=" + encodeURIComponent(name);
        const url = "https://corsproxy.io/?" + encodeURIComponent(rsUrl);

        const res = await fetch(url);
        if(!res.ok) {
            alert("Jogador não encontrado ou perfil privado.");
            buscarBtn.innerHTML = origText; 
            buscarBtn.disabled = false;
            return;
        }

        const text = await res.text();
        const lines = text.split("\n");

        // Índice 28 na API do RS3 é Arqueologia
        const arch_INDEX = 28;

        if(!lines[arch_INDEX]) {
            alert("Erro ao ler dados da skill.");
            buscarBtn.innerHTML = origText; 
            buscarBtn.disabled = false;
            return;
        }

        const parts = lines[arch_INDEX].split(",");
        const nivel = parseInt(parts[1]); // parts[1] é o Nível (parts[2] seria XP)

        if(isNaN(nivel) || nivel < 1) {
            alert("Erro ao obter o nível de Arqueologia deste jogador.");
            buscarBtn.innerHTML = origText; 
            buscarBtn.disabled = false;
            return;
        }

        // Atualiza a tela e o Store
        levelInput.value = nivel;
        store.setLevel(nivel);
        
        buscarBtn.innerHTML = '<i class="fa-solid fa-check mr-1"></i>Carregado!';
        setTimeout(() => { 
            buscarBtn.innerHTML = origText; 
            buscarBtn.disabled = false; 
        }, 2000);

    } catch(err) {
        console.error(err);
        alert("Erro ao buscar dados. Verifique sua conexão ou tente novamente.");
        buscarBtn.innerHTML = origText;
        buscarBtn.disabled = false;
    }
});

// 4. Lógica das Abas (Navegação)
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
    tabContent.innerHTML = '';
    switch (currentTab) {
        case 'overview': renderOverview(tabContent); break;
        case 'mysteries': renderMysteries(tabContent); break;
        case 'artefacts': renderArtefacts(tabContent); break;
        case 'collections': renderCollections(tabContent); break;
        case 'research': renderResearch(tabContent); break;
    }
}

// Re-renderizar abas quando o state/nível mudar
store.subscribe(() => {
    renderCurrentTab();
});

// Iniciar app visualmente
updateTabUI();
renderCurrentTab();

// Tornar a função global para os botões gerados dinamicamente
window.toggleItem = (id) => {
    store.toggleDone(id);
};
