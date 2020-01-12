import { createStore } from 'redux';

const defaultState = {
    library: [],
    activePresentation: {
        name: '',
        slides: []
    },
    activeSlide: null,
    loading: false,
    ip: '', // probably don't need this
    connected: false,
};

const store = createStore((state = defaultState, action) => {
    switch (action.type) {
    case 'SET_LIBRARY':
        return {
            ...state,
            library: action.library
        };
    case 'SET_ACTIVE_PRESENTATION':
        return {
            ...state,
            activePresentation: action.presentation
        };
    case 'SET_CONNECTED':
        return {
            ...state,
            connected: action.connected
        };
    case 'SET_IP':
        return {
            ...state,
            ip: action.ip
        };
    default:
        return state;
    }
});

export default store;
