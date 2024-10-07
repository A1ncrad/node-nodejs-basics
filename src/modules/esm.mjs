import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp }  from 'node:http';
import './files/c.js';


const random = Math.random();
let unknownObject;

if (random > 0.5) {
    const module = await import("./files/a.json", { with: { type: "json" } } );
    unknownObject = module.default;
} else {
    const module = await import("./files/b.json", { with: { type: "json" } } );
    unknownObject = module.default;
}

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { myServer, unknownObject };
