export function updateTitle(newTitle) {
    return {
        type: 'UPDATE_TITLE',
        payload: { newTitle }
    };
}