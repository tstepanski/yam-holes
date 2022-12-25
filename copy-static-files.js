const fileSystem = require("fs");

fileSystem.copyFileSync("src/styles.css", "dist/styles.css");

const markup = fileSystem
	.readFileSync("src/index.html")
	.toString()
	.replace("main.ts", "main.min.js")
	.replace("styles.css", "styles.min.css");

fileSystem.writeFileSync("dist/index.html", markup);
