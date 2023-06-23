export const parseArgs = () => {
    const defaultName = 'Mysterious';
    const usernamePrefix = '--username=';
    const result = process.argv.slice(2)
        .map( (arg) => arg
            .startsWith(usernamePrefix) ?
            arg.replace(usernamePrefix, ''): defaultName);

    return result.length <= 0 ? defaultName: result.join('');

};
