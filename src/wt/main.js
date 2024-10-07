import { Worker } from "node:worker_threads";
import { cpus } from "node:os";


const performCalculations = async () => {
    const promises = [];

    for (let i = 0; i < cpus().length; i++) {
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker("./worker.js", {workerData: 10 + i} );
            worker.on("message", (data) => {
                resolve({ status: "resolved", data });
            });

            worker.on("error", () => {
                resolve({ status: "error", data: null });
            });

            worker.on("exit", (code) => {
                if (code != 0){
                    resolve({ status: "error", data: null });
                }
            });
        });

        promises.push(promise);
    }

    Promise.all(promises).then((values) => {
        console.log(values);
    });
};

await performCalculations();
