import fs from "node:fs";

const create = async () => {
    const content = "I am fresh and young!"

    if (fs.existsSync("files/fresh.txt")) {
        throw new Error("file is already exists");
    }

    fs.writeFile("files/fresh.txt", content, err => {
        if(err) {
            console.error(err);
        }
    }); 
};

await create();
