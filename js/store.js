export const store = {
    level: 99,
    done: new Set(),
    listeners: [],

    init() {
        const saved = localStorage.getItem('archaeologyTracker');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.level = parsed.level || 99;
            this.done = new Set(parsed.done || []);
        }
    },

    save() {
        localStorage.setItem('archaeologyTracker', JSON.stringify({
            level: parseInt(this.level),
            done: Array.from(this.done)
        }));
        this.notify();
    },

    setLevel(lvl) {
        this.level = parseInt(lvl);
        this.save();
    },

    toggleDone(id) {
        if (this.done.has(id)) {
            this.done.delete(id);
        } else {
            this.done.add(id);
        }
        this.save();
    },

    isDone(id) {
        return this.done.has(id);
    },

    subscribe(fn) {
        this.listeners.push(fn);
    },

    notify() {
        this.listeners.forEach(fn => fn());
    }
};

store.init();
