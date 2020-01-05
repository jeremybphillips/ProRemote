import { createStore } from 'redux';

const defaultState = {
    library: [],
    activePresentation: {
        name: '',
        slides: []
    },
    activeSlide: null,
    loading: false,
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
    case 'SET_LOADING_STATUS':
        return {
            ...state,
            loading: action.loading
        };
    case 'SET_ACTIVE_SLIDE':
        return {
            ...state,
            activeSlide: action.activeSlide
        };
    default:
        return state;
    }
});

export default store;
