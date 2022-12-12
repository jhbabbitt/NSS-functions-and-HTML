const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const HTMLMaker = (computerObject) => {
    const computerHTML = `<section id="computer--${computerObject.id}">\n\t<h1>${computerObject.manufacturer} ${computerObject.make}</h1>\n\t<div>Model: ${computerObject.model}</div>\n\t<div>Memory: ${computerObject.specs.memory} GB</div>\n\t<div>Hard drive space: ${computerObject.specs.hardDrive}<div/div>\n\t<div>Processor speed: ${computerObject.specs.processor} Ghz</div>\n</section>`
    return computerHTML
}
const returnedString = HTMLMaker(computer)
console.log(returnedString)
