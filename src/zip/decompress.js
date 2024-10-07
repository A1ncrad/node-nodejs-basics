import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";


const decompress = async () => {
    const gunzip = createGunzip();
    const from = createReadStream("files/archive.gz");
    const to = createWriteStream("files/fileToCompress.txt");

    pipeline(from, gunzip, to, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

await decompress();
