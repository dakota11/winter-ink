import { writable } from 'svelte/store';

function createGameStore() {
    const { subscribe, set, update } = writable({
        currentScene: {
            title: null,
            character: null
        },
        template: 'StartScreen',
        debug: true,
        images: {
            bg: {
                filepath: null
            },
            left: {
                filepath: null
            }
        }
    });

    return {
        subscribe,
        set,
        update,
        updateProperty: (propertyPath, value) => {
            update(store => {
                store = setNestedProperty(store, propertyPath, value);
                return store;
            });
        }
    };
}

function setNestedProperty(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            current[key] = value;
        } else {
            current = current[key] = current[key] || {};
        }
    });

    return obj;
}




export const _gameStore = createGameStore();
window.gs = _gameStore