import fs from "node:fs";

const list = async () => {
    fs.readdir("files", (err, files) => {
        if (err) {
            throw new Error("FS operation failed");
        }

        for (let i = 0; i < files.length; ++i) {
            console.log(files[i]);
        }
    });
};

await list();
