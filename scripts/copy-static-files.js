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

const footerTask = (async () => {
	const footerBuffer = await fileSystem.readFile("./src/footer.html");

	return footerBuffer.toString();
})();

const minifyMarkupAndWrite = async (fileName, markup) => {
	const footer = await footerTask;

	markup = markup
		.replace("<!-- FOOTER -->", footer)
		.replace(".css", ".min.css")
		.replace(".ts", ".min.js");

	const minifiedMarkup = minifyMarkup(markup, minificationOptions);

	return await fileSystem.writeFile(`./dist/${fileName}.html`, minifiedMarkup);
};

const readMinifyAndWriteMarkup = async fileName => {
	const markupBuffer = await fileSystem.readFile(`./src/${fileName}.html`);
	const markup = markupBuffer.toString();

	await minifyMarkupAndWrite(fileName, markup);
};

const writeTableMarkupTask = (async () => {
	const dataTask = fileSystem.readFile("./src/wormholes.json")
	const sourceMarkupTask = fileSystem.readFile("./src/table.html");
	const [jsonBuffer, sourceMarkupBuffer] = await Promise.all([dataTask, sourceMarkupTask]);
	const json = jsonBuffer.toString();
	const markup = sourceMarkupBuffer.toString();
	const wormholes = JSON.parse(json);
	const [start, template, end] = markup.split("<!-- TEMPLATE -->");

	const wormholeRows = wormholes
		.map(wormhole => Object
			.keys(wormhole)
			.reduce((templateCopy, key) => templateCopy.replace(`{{${key}}}`, wormhole[key]), template));

	const replacedMarkup = [start, ...wormholeRows, end].join("");

	await minifyMarkupAndWrite("table", replacedMarkup);
})();


const writeMarkupTask = readMinifyAndWriteMarkup("index");
const writePrivacyPolicyTask = readMinifyAndWriteMarkup("privacy");

(() => Promise.all([writeTableMarkupTask, writeMarkupTask, writePrivacyPolicyTask]))();
