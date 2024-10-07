import fs from "node:fs";

const copy = async () => {
    if (fs.existsSync("files_copy")) {
        throw new Error("FS operation failed");
    }

    fs.cp("files", "files_copy", {recursive: true}, (err) => {
        if (err){
            throw new Error("FS operation failed");
        }
    });
};

await copy();
