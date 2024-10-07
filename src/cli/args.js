const parseArgs = () => {
    let args = [];

    for (let i = 2; i < process.argv.length; ++i) {
        let string = process.argv[i];

        if (string.startsWith("--")) {
            string = string.replace("--", "");
        }

        args.push(string);
    }

    for (let i = 0; i < args.length; i += 2) {
        console.log(`${args[i]} is ${args[i + 1]}`);
    }
};


parseArgs();
