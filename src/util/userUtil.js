

export const isLoggedIn = () => {
    return !!localStorage.getItem('tic-tac-toe');
};

export const getToken = () => {
    return localStorage.getItem('tic-tac-toe');
}