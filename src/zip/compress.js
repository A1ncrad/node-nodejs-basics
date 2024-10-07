import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";


const compress = async () => {
    const gzip = createGzip();
    const from = createReadStream("files/fileToCompress.txt");
    const to = createWriteStream("files/archive.gz");

    pipeline(from, gzip, to, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

await compress();
