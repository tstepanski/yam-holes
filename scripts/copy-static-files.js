import {minify as minifyMarkup} from "html-minifier";
import fileSystem from "fs/promises";

const minificationOptions = {
	collapseWhitespace: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeTagWhitespace: true,
	useShortDoctype: true,
	minifyCss: true,
	minifyJs: true
};

const minifyMarkupAndWrite = (fileName, markup) => {
	const minifiedMarkup = minifyMarkup(markup, minificationOptions);

	return fileSystem.writeFile(`./dist/${fileName}.html`, minifiedMarkup);
};

const writeMarkupTask = (async () => {
	const sourceMarkup = await fileSystem.readFile("./src/index.html");

	const replacedMarkup = sourceMarkup
		.toString()
		.replace("main.ts", "main.min.js")
		.replace("styles.css", "styles.min.css");

	await minifyMarkupAndWrite("index", replacedMarkup);
})();

const writeTableMarkupTask = (async () => {
	const dataTask = fileSystem.readFile("./src/wormholes.json")
	const sourceMarkupTask = fileSystem.readFile("./src/table.html");
	const [jsonBuffer, sourceMarkupBuffer] = await Promise.all([dataTask, sourceMarkupTask]);
	const json = jsonBuffer.toString();
	const markup = sourceMarkupBuffer.toString();
	const wormholes = JSON.parse(json);
	const [start, template, end] = markup.split("<!-- TEMPLATE -->");
	const replacedStart = start.replace("table-styles.css", "table-styles.min.css");

	const wormholeRows = wormholes
		.map(wormhole => Object
			.keys(wormhole)
			.reduce((templateCopy, key) => templateCopy.replace(`{{${key}}}`, wormhole[key]), template));

	const replacedMarkup = [replacedStart, ...wormholeRows, end].join("");

	await minifyMarkupAndWrite("table", replacedMarkup);
})();

(() => Promise.all([writeTableMarkupTask, writeMarkupTask]))();
