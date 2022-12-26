import fileSystem from "fs/promises";

(async () => {
	await fileSystem.rm("./dist", {
		recursive: true,
		force: true
	});

	await fileSystem.mkdir("./dist");
})();
