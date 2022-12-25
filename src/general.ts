const getElement = (id: string): HTMLElement => {
	const element = document.getElementById(id);

	if (element === null || element === undefined) {
		throw new Error(`Count not find element with id: ${id}`);
	}

	return element;
};

const massFormatter = (value: number): string => `${value.toLocaleString()}kg`;

const createButtons = <TValue>(parent: HTMLElement, record: Record<string, TValue>, type: string, onClickHandler: (key: string) => void): void => {
	Object
		.keys(record)
		.sort()
		.forEach(key => {
			const button = document.createElement("div");
			const removeMouseDownClass = (): void => button.classList.remove("mouse-down")

			button.id = `${type}-${key}`;
			button.innerText = key;

			button.classList.add(`${type}-select-button`, "select-button");

			button.addEventListener("click", () => onClickHandler(key));
			button.addEventListener("mousedown", () => button.classList.add("mouse-down"));
			button.addEventListener("mouseup", removeMouseDownClass);
			button.addEventListener("mouseleave", removeMouseDownClass)

			parent.appendChild(button);
		});
};
