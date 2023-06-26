export const parseInput = (resData) => {
    const specSymbols = `'"`;
    const indexOf = resData.indexOf(' ');
    const operation  = resData.slice(0, indexOf);
    const inputData = resData.slice(indexOf).trim();

    const isSpec = [...specSymbols].every( symbol => !inputData.includes(symbol));

    const parseArgs = (input,symbols) => {
        let parsedArgs = [input];
        symbols.split('').forEach(symbol => {
            parsedArgs = parsedArgs
                .flatMap(arg => arg.split(symbol).map(item => item.trim()));
        });
        return parsedArgs.filter(arg => arg !== '');
    }

    if(indexOf === -1){
        return [resData, []];
    }

    if(isSpec){
        return [operation, inputData.split(' ')];
    }
    else {
        const test = parseArgs(inputData, specSymbols);
        return [operation, test];
    }
}
