import { store } from '../store.js';
import { research } from '../data.js';

export default function renderResearch(container) {
    const html = research.map(m => {
        const isLocked = m.level > store.level;
        const isDone = store.isDone(m.id);
        const cardClass = `card p-4 rounded-xl flex flex-col justify-between ${isDone ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
        
        return `
            <div class="${cardClass}">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <span class="bg-slate-800 px-2 py-1 rounded text-xs font-bold">Nível ${m.level}</span>
                        ${isLocked ? '<span class="text-red-400 text-xs"><i class="fa-solid fa-lock mr-1"></i>Bloqueado</span>' : ''}
                    </div>
                    <h3 class="text-lg font-bold text-yellow-400 mb-1">${m.name}</h3>
                    <p class="text-sm text-slate-400 mb-2"><i class="fa-solid fa-location-dot mr-1"></i>${m.digSite}</p>
                    <div class="text-sm text-slate-300 mb-4">
                        <strong>Requisitos:</strong><br>
                        ${m.requirements.map(req => `• ${req}`).join('<br>')}
                    </div>
                </div>
                <button onclick="toggleItem('${m.id}')" class="w-full mt-2 py-2 rounded-md font-bold transition-colors ${isDone ? 'bg-yellow-500 text-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
                    ${isDone ? '<i class="fa-solid fa-check mr-2"></i>Concluído' : 'Marcar Concluído'}
                </button>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Pesquisas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${html}
        </div>
    `;
}
