export const showAlert = setter => {
    setter(true);
    setTimeout(() => setter(false), 2000);
};
