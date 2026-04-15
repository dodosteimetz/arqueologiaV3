import { store } from '../store.js';
import { artefacts } from '../data.js';

export default function renderArtefacts(container) {
    const html = artefacts.map(a => {
        const isLocked = parseInt(a.level) > store.level;
        const isDone = store.isDone(a.name); // Usando o nome como ID
        const cardClass = `card p-4 rounded-xl flex flex-col justify-between ${isDone ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
        
        return `
            <div class="${cardClass}">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <span class="bg-slate-800 px-2 py-1 rounded text-xs font-bold">Nível ${a.level}</span>
                        ${isLocked ? '<span class="text-red-400 text-xs"><i class="fa-solid fa-lock mr-1"></i>Bloqueado</span>' : ''}
                    </div>
                    <h3 class="text-lg font-bold text-yellow-400 mb-2">${a.name}</h3>
                    <div class="flex gap-4 text-sm mb-3">
                        <span class="text-green-400"><i class="fa-solid fa-star mr-1"></i>${a.xp} XP</span>
                        <span class="text-amber-600"><i class="fa-solid fa-coins mr-1"></i>${a.chronotes}</span>
                    </div>
                    <div class="text-sm text-slate-300 mb-4 bg-slate-900 p-2 rounded">
                        <strong>Materiais:</strong><br>
                        ${a.materials.map(mat => `• ${mat}`).join('<br>')}
                    </div>
                </div>
                <button onclick="toggleItem('${a.name}')" class="w-full mt-2 py-2 rounded-md font-bold transition-colors ${isDone ? 'bg-yellow-500 text-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
                    ${isDone ? '<i class="fa-solid fa-check mr-2"></i>Concluído' : 'Marcar Concluído'}
                </button>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Artefatos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${html}
        </div>
    `;
}
