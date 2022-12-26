const fileSystem = require("fs");

fileSystem.rmSync("./dist/main.js");
fileSystem.rmSync("./dist/main.js.map");
fileSystem.rmSync("./dist/styles.css");
