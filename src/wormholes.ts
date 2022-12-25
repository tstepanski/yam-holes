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
