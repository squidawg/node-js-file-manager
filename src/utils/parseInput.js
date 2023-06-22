export const parseInput = (resData) => {
    const [result='', ...editedInput] = resData.split(' ');

    return [result, ...editedInput];
}
