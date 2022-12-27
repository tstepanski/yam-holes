interface Wormhole {
	name: string;
	destination: string;
	maxLifespanInHours: number,
	maxStableMass: number,
	maxMassRegeneration: number,
	maxJumpMass: number
}

const wormHoles: Readonly<Wormhole>[] =
// DATA
		[]
// DATA
;

const lastButtonOfTypeClicked: Record<string, HTMLElement> = {};

const getElement = (id: string): HTMLElement => {
	const element = document.getElementById(id);

	if (element === null || element === undefined) {
		throw new Error(`Count not find element with id: ${id}`);
	}

	return element;
};

const massFormatter = (value: number): string => `${value.toLocaleString()}kg`;

const createButtons =
	<TValue>(parent: HTMLElement, record: Record<string, TValue>, type: string,
	         onClickHandler: (key: string) => void): void =>
		Object
			.keys(record)
			.sort()
			.forEach((key, index) => {
				const button = document.createElement("div");
				const removeMouseDownClass = (): void => button.classList.remove("mouse-down");

				button.id = `${type}-${key}`;
				button.innerText = key;

				button.classList.add(`${type}-select-button`, "select-button");

				const onClick = () => {
					lastButtonOfTypeClicked[type]?.classList.remove("selected");

					button.classList.add("selected");

					lastButtonOfTypeClicked[type] = button;

					onClickHandler(key);
				};

				button.addEventListener("click", onClick);
				button.addEventListener("mousedown", () => button.classList.add("mouse-down"));
				button.addEventListener("mouseup", removeMouseDownClass);
				button.addEventListener("mouseleave", removeMouseDownClass);

				parent.appendChild(button);

				if (index === 0) {
					onClick();
				}
			});

const wormholesByFirstLetterThenByNumbers = wormHoles.reduce((accumulator, wormhole) => {
	const wormholeName = wormhole.name;
	const letter = wormholeName[0];
	const numbers = wormholeName.substring(1);

	accumulator[letter] = accumulator[letter] ?? <Record<string, Wormhole>>{};
	accumulator[letter][numbers] = wormhole;

	return accumulator;
}, <Record<string, Record<string, Wormhole>>>{});

const main = (): void => {
	const letterSelect = getElement("letter-select");
	const numberSelect = getElement("number-select");
	const wormholeInformation = getElement("wormhole-information");
	const wormholeName = getElement("wormhole-name");
	const wormholeDestination = getElement("wormhole-destination");
	const wormholeBars = getElement("wormhole-metric-bars");
	const wormholeValues = getElement("wormhole-metric-values");

	const createWormholeValueBar = (valueName: string, maximum: number, textValueFormatter: (value: number) => string):
		(value: number) => void => {
		const barBorder = document.createElement("div");
		const barValue = document.createElement("div");
		const valueSpan = document.createElement("span");
		const valueHeader = document.createElement("span");

		valueHeader.innerText = valueName;

		barBorder.classList.add("bar-border");
		barValue.classList.add("bar-value");
		valueSpan.classList.add("simple-value");
		valueHeader.classList.add("value-header");

		barBorder.appendChild(barValue);
		wormholeBars.appendChild(valueHeader);
		wormholeBars.appendChild(barBorder);
		wormholeValues.appendChild(valueSpan);

		return value => {
			barValue.style.width = `${value / maximum * 100}%`;

			valueSpan.innerText = textValueFormatter(value);
		};
	};

	const lifespanSetter = createWormholeValueBar("Lifespan", 48, lifespan => `${lifespan}h`);
	const maxStableMassSetter = createWormholeValueBar("Max Stable Mass", 5000000000, massFormatter);
	const maxMassRegenerationSetter = createWormholeValueBar("Max Mass Regeneration", 500000000, massFormatter);
	const maxJumpMassSetter = createWormholeValueBar("Max Jump Mass", 2000000000, massFormatter);

	const onWormholeSelect = (wormhole: Wormhole): void => {
		wormholeName.innerText = wormhole.name;
		wormholeDestination.innerText = wormhole.destination;

		lifespanSetter(wormhole.maxLifespanInHours);
		maxStableMassSetter(wormhole.maxStableMass);
		maxMassRegenerationSetter(wormhole.maxMassRegeneration);
		maxJumpMassSetter(wormhole.maxJumpMass);

		wormholeInformation.style.display = "block";
	};

	const onLetterButtonClick = (letter: string): void => {
		while (numberSelect.lastChild) {
			numberSelect.removeChild(numberSelect.lastChild);
		}

		const wormholesByNumber = wormholesByFirstLetterThenByNumbers[letter];

		createButtons(numberSelect, wormholesByNumber, "number",
			(number: string): void => onWormholeSelect(wormholesByNumber[number]));
	};

	createButtons(letterSelect, wormholesByFirstLetterThenByNumbers, "letter", onLetterButtonClick);

	getElement("application").style.display = "";
};

window.onload = main;
