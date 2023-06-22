export const parseArgs = () => {
    const usernamePrefix = '--username=';
    const result = process.argv.slice(2)
        .map( (arg) => arg
            .startsWith(usernamePrefix) ?
            arg.replace(usernamePrefix, ''): 'Defaulty');

    return result.join('');

};
