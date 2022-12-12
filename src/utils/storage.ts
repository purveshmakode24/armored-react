// const storagePrefix = 'armoured_react_';

const storage = {
    getItem: (key: string) => {
        return JSON.parse(window.localStorage.getItem(key) as string);
    },
    setItem: (key: string, value: string) => {
        window.localStorage.setItem(key, value);
    },
    clearItem: (key: string) => {
        window.localStorage.removeItem(key);
    }
};

export default storage;