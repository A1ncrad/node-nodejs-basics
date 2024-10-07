import { createReadStream } from "node:fs";


const read = async () => {
    const stream = createReadStream("files/fileToRead.txt");

    stream.pipe(process.stdout);
};

await read();
