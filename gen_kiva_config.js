console.log(JSON.stringify({
	shelves: [
		{
			uid: 0,
			products: [
				{
					name: "x",
					upc: "?",
					stock: {
						current: 10,
						arrived: 1,
						ordered: 3,
						expected: 2
					}
				}
			]
		}
	],
	pickers: [
		{
			uid: 1,
			name: "y",
			worker: {
				uid: 2,
				name: "Max Muster",
				shift: {
					start: "09:00",
					end: "17:00",
					breaks: [
						"12:00-30"
					]
				}
			}
		}
	],

	robots: [
		{
			uid: 3,
			battery: "?",
			home: "?"
		}
	],
	orders: [
		{
			uid: 4,
			date: "2014-12-14",
			customer: {
				uid: 5,
				name: "Max Muster",
				email: "max@muster.de",
				shipping: {
					address: "Hauptstraße 1",
					expected: "?"
				}
			},
			products: [
				{
					name: "x",
					upc: "?",
					quantity: 3
				}
			]
		}
	]
}));
