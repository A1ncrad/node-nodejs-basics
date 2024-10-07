import { createHash } from "node:crypto";
import fs from "node:fs";


const calculateHash = async () => {
    const hash = createHash("sha256");
    
    hash.on("readable", () => {
        const data = hash.read();

        if (data) {
            console.log(data.toString("hex"));
        }
    });

    fs.readFile("./files/fileToCalculateHashFor.txt", "utf8", (err, data) => {
        if (err) {
            throw err;
        }

        hash.write(data);
        hash.end(); 
    });

};

await calculateHash();
