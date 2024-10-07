import fs from "node:fs";

const rename = async () => {
    if (fs.existsSync("wrongFilename.txt")) {
        throw new Error("FS operation failed");
    }

    fs.rename("wrongFilename.txt", "propertyFilename.md", (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }
    });
};


await rename();
