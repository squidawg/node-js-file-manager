export const parseArgs = () => {
    const defaultName = 'Mysterious';
    const usernamePrefix = '--username=';
    const result = process.argv.slice(2)
        .map( (arg) => arg
            .startsWith(usernamePrefix) ?
            arg.slice(usernamePrefix.length): defaultName)
        .join('');
    return result === '' ? defaultName: result;

};
