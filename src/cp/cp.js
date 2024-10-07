import { fork } from "node:child_process";


const spawnChildProcess = async (args) => {
    const child = fork("./files/script.js", args);
    child.on("message", (msg) => {
        console.log(msg);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["helo", "world" ] );
