import { createStore } from 'redux';

const defaultState = {
    library: [],
    activePresentation: null,
    activeSlide: null
};

const store = createStore((state = defaultState, action) => {
    switch (action.type) {
    case 'SET_PRESENTATIONS':
        return {
            ...state,
            library: action.library
        };
    case 'SET_ACTIVE_PRESENTATION':
        return {
            ...state,
            activePresentation: action.presentation
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
