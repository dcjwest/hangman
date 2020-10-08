export const showAlert = setter => {
    setter(true);
    setTimeout(() => setter(false), 2000);
};

export const checkWin = (word, correctArr, wrongArr, chances) => {
    let result = '';
    const numUniqueChars = word
        .split('')
        .filter((char, i, arr) => arr.indexOf(char) === i).length;

    if (correctArr.length === numUniqueChars) {
        result = 'win';
    }

    if (wrongArr.length === chances) {
        result = 'lose';
    }

    return result;
};
