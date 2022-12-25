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
};

window.onload = main;
