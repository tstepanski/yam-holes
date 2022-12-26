import fileSystem from "fs/promises";
import ts from "typescript";

(async () => {
	const dataTask = fileSystem.readFile("./src/wormholes.json")
	const sourceScriptTask = fileSystem.readFile("./src/main.ts");
	const configurationTask = fileSystem.readFile("./tsconfig.json");

	const [jsonBuffer, sourceScriptBuffer, configurationBuffer] =
		await Promise.all([dataTask, sourceScriptTask, configurationTask]);

	const json = jsonBuffer.toString();
	const script = sourceScriptBuffer.toString();
	const configurationJson = configurationBuffer.toString();
	const configuration = JSON.parse(configurationJson);
	const [start, _, end] = script.split("// DATA");
	const code = json.replace(/"([^"]+)":/g, "$1:");
	const replacedScript = [start, code, end].join("");

	const result = ts.transpileModule(replacedScript, configuration.compilerOptions);
	const diagnostics = result.diagnostics;

	diagnostics
		.forEach(diagnostic => {
			const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");

			if (diagnostic.file) {
				const {line, character} = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);

				console.error(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
			} else {
				console.error(message);
			}
		});

	if (diagnostics.length > 0) {
		process.exit(1);
	}

	await fileSystem.writeFile("./dist/main.min.js", result.outputText);

	process.exit(0);
})();
