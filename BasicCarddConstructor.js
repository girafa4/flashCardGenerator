var inquirer = require("inquirer");

var cardData = require('./basicCards.json');
console.log(cardData);

function BasicCard(frontSide,backSide){
	this.front = frontSide;
	this.back = backSide;
}

inquirer.prompt([{
	type:"input",
	name:"frontSide",
	message:"What is the question you want to ask?"
},{
	type:"input",
	name:"backSide",
	message:"What is the answer to the above question?"
}]).then(function(inputs){
	var card = new BasicCard(inputs.frontSide,inputs.backSide);
	console.log(card);
})