export const setLibrary = (library = []) => ({
    type: 'SET_LIBRARY',
    library
});

export const setPresentation = (presentation = {}) => ({
    type: 'SET_ACTIVE_PRESENTATION',
    presentation
});

export const setLoadingStatus = (loading) => ({
    type: 'SET_LOADING_STATUS',
    loading
});
