window.AppStorage = {
    async getItem(key) {
        if (window.Telegram?.WebApp?.CloudStorage) {
            return new Promise(resolve => window.Telegram.WebApp.CloudStorage.getItem(key, (err, val) => resolve(val || localStorage.getItem(key))));
        }
        return localStorage.getItem(key);
    },
    async setItem(key, value) {
        localStorage.setItem(key, value);
        if (window.Telegram?.WebApp?.CloudStorage) window.Telegram.WebApp.CloudStorage.setItem(key, value);
    },
    async removeItem(key) {
        localStorage.removeItem(key);
        if (window.Telegram?.WebApp?.CloudStorage) window.Telegram.WebApp.CloudStorage.removeItem(key);
    }
};

window.triggerHaptic = (type = 'impact', style = 'light') => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
        if (type === 'impact') window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
        else if (type === 'notification') window.Telegram.WebApp.HapticFeedback.notificationOccurred(style);
        else if (type === 'selection') window.Telegram.WebApp.HapticFeedback.selectionChanged();
    }
};
