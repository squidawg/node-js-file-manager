import fs  from 'fs'

export const cat  = async (...userInput) => {
    const filePath = userInput.at(0)
    const readableStream = fs.createReadStream(filePath, 'utf-8')
    for await (const chunk of readableStream){
        process.stdout.write(chunk)
    }

}
