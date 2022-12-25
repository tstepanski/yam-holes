interface Wormhole {
    name: string;
    destination: string;
    maxLifespanInHours: number,
    maxStableMass: number,
    maxMassRegeneration: number,
    maxJumpMass: number
}

window.onload = () => {
    const wormHoles: Readonly<Wormhole>[] = [
        {
            name: "A009",
            destination: "Class 13 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 20000000
        },
        {
            name: "A239",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "A641",
            destination: "Hi-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "A982",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "B041",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 48,
            maxStableMass: 3000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 1000000000
        },
        {
            name: "B274",
            destination: "Hi-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "B449",
            destination: "Hi-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "B520",
            destination: "Hi-sec system",
            maxLifespanInHours: 48,
            maxStableMass: 3000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 1350000000
        },
        {
            name: "B735",
            destination: "Barbican drifter system",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "C008",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "C125",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "C140",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "C247",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "C248",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 2000000000
        },
        {
            name: "C391",
            destination: "Low-sec system",
            maxLifespanInHours: 48,
            maxStableMass: 3000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 2000000000
        },
        {
            name: "C414",
            destination: "Conflux drifter system",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "C729",
            destination: "Triglavian system",
            maxLifespanInHours: 12,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 410000000
        },
        {
            name: "D364",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "D382",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "D792",
            destination: "Hi-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "D845",
            destination: "Hi-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 5000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 375000000
        },
        {
            name: "E004",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "E175",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "E545",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "E587",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "F135",
            destination: "Thera",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "F216",
            destination: "Triglavian system",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "F355",
            destination: "Thera",
            maxLifespanInHours: 16,
            maxStableMass: 100000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "G008",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "G024",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "H121",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "H296",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3300000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "H900",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "I182",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "J244",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "J377",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "K162",
            destination: "Exit",
            maxLifespanInHours: 24,
            maxStableMass: 0,
            maxMassRegeneration: 0,
            maxJumpMass: 0
        },
        {
            name: "K329",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 5000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 2000000000
        },
        {
            name: "K346",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "L005",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "L031",
            destination: "Thera",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "L477",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "L614",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "M001",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "M164",
            destination: "Thera",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 300000000
        },
        {
            name: "M267",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "M555",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "M609",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "N062",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "N110",
            destination: "Hi-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "N290",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 2000000000
        },
        {
            name: "N432",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "N766",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "N770",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "N944",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "N968",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "O128",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 100000000,
            maxJumpMass: 375000000
        },
        {
            name: "O477",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "O883",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "P060",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "Q003",
            destination: "Null-sec system",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "Q063",
            destination: "Hi-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "Q317",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "R051",
            destination: "Low-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "R081",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "R259",
            destination: "Redoubt drifter system",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "R474",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "R943",
            destination: "Class 2 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "S047",
            destination: "Hi-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "S199",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "S804",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "S877",
            destination: "Sentinel drifter system",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "T405",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "T458",
            destination: "Thera",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "U210",
            destination: "Low-sec system",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "U319",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 48,
            maxStableMass: 3000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 2000000000
        },
        {
            name: "U372",
            destination: "Triglavian system",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "U574",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "V283",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 1000000000
        },
        {
            name: "V301",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "V753",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3300000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "V898",
            destination: "Low-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 300000000
        },
        {
            name: "V911",
            destination: "Class 5 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3300000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "V928",
            destination: "Vidette drifter system",
            maxLifespanInHours: 16,
            maxStableMass: 750000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "W237",
            destination: "Class 6 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 3300000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "X450",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "X702",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 24,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "X877",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "Y683",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "Y790",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "Z006",
            destination: "Class 3 wormhole",
            maxLifespanInHours: 4.5,
            maxStableMass: 1000000000,
            maxMassRegeneration: 500000000,
            maxJumpMass: 5000000
        },
        {
            name: "Z060",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 1000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "Z142",
            destination: "Null-sec system",
            maxLifespanInHours: 16,
            maxStableMass: 3000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 2000000000
        },
        {
            name: "Z457",
            destination: "Class 4 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 2000000000,
            maxMassRegeneration: 0,
            maxJumpMass: 375000000
        },
        {
            name: "Z647",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 500000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        },
        {
            name: "Z971",
            destination: "Class 1 wormhole",
            maxLifespanInHours: 16,
            maxStableMass: 100000000,
            maxMassRegeneration: 0,
            maxJumpMass: 62000000
        }
    ];

    const wormholesByFirstLetterThenByNumbers = wormHoles.reduce((accumulator, wormhole) => {
        const wormholeName = wormhole.name;
        const letter = wormholeName[0];
        const numbers = wormholeName.substring(1);

        accumulator[letter] = accumulator[letter] ?? <Record<string, Wormhole>>{};
        accumulator[letter][numbers] = wormhole;

        return accumulator;
    }, <Record<string, Record<string, Wormhole>>>{});

    const letterSelect = document.getElementById("letter-select");
    const numberSelect = document.getElementById("number-select");
    const wormholeInformation = document.getElementById("wormhole-information");
    const wormholeName = document.getElementById("wormhole-name");
    const wormholeDestination = document.getElementById("wormhole-destination");

    const createWormholeValueBar = (valueName: string, maximum: number, textValueFormatter: (value: number) => string):
        (value: number) => void => {
        const bar = document.createElement("div");
        const barBorder = document.createElement("div");
        const barValue = document.createElement("div");
        const valueSpan = document.createElement("span");

        bar.id = `wormhole-${valueName}-bar`;
        barBorder.id = `wormhole-${valueName}-bar-border`;
        barValue.id = `wormhole-${valueName}-bar-value`;
        valueSpan.id = `wormhole-${valueName}-value`;

        bar.classList.add("bar-container");
        barBorder.classList.add("bar-border");
        barValue.classList.add("bar-value");
        valueSpan.classList.add("simple-value");

        barBorder.appendChild(barValue);
        bar.appendChild(barBorder);
        bar.appendChild(valueSpan);
        wormholeInformation.appendChild(bar);

        return value => {
            barValue.style.width = `${value / maximum * 100}%`;

            valueSpan.innerText = textValueFormatter(value);
        }
    };

    const massFormatter = (value: number): string => `${value}kg`;

    const lifespanSetter = createWormholeValueBar("lifespan", 24, lifespan => `${lifespan}h`);
    const maxStableMassSetter = createWormholeValueBar("maxStableMass", 5000000000, massFormatter);
    const maxMassRegenerationSetter = createWormholeValueBar("maxMassRegeneration", 500000000, massFormatter);
    const maxJumpMassSetter = createWormholeValueBar("maxJumpMass", 2000000000, massFormatter);

    const createButtons = <TValue>(parent: HTMLElement, record: Record<string, TValue>, type: string, onClickHandler: (key: string) => void): void => {
        Object
            .keys(record)
            .sort()
            .forEach(key => {
                const button = document.createElement("div");

                button.id = `${type}-${key}`;
                button.innerText = key;

                button.classList.add(`${type}-select-button`, "select-button");

                button.addEventListener("click", () => onClickHandler(key))
                parent.appendChild(button);
            });
    };

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
}
