import { store } from '../store.js';
import { mysteries, collections, research, artefacts } from '../data.js';

export default function renderOverview(container) {
    const lvl = store.level;
    
    // Filtros por nível
    const availableMysteries = mysteries.filter(m => m.level <= lvl);
    const availableCollections = collections.filter(c => c.level <= lvl);
    const availableResearch = research.filter(r => r.level <= lvl);

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="card p-4 rounded-xl">
                <h3 class="text-xl font-bold mb-2"><i class="fa-solid fa-scroll text-yellow-500 mr-2"></i>Mistérios</h3>
                <p class="text-slate-400">Total disponíveis: ${availableMysteries.length}</p>
            </div>
            <div class="card p-4 rounded-xl">
                <h3 class="text-xl font-bold mb-2"><i class="fa-solid fa-box-open text-yellow-500 mr-2"></i>Coleções</h3>
                <p class="text-slate-400">Total disponíveis: ${availableCollections.length}</p>
            </div>
            <div class="card p-4 rounded-xl">
                <h3 class="text-xl font-bold mb-2"><i class="fa-solid fa-magnifying-glass text-yellow-500 mr-2"></i>Pesquisas</h3>
                <p class="text-slate-400">Total disponíveis: ${availableResearch.length}</p>
            </div>
        </div>
        <p class="text-slate-400 mt-4 text-sm">* Visão geral simplificada. Navegue pelas abas acima para ver os detalhes completos, marcar conclusões e ver itens bloqueados.</p>
    `;
}
