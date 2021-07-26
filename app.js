let getFive = document.querySelector('.button .five');
getFive = 5 / 100;
console.log(getFive);
let getTen = document.querySelector('.button .ten');
getTen = 10 / 100;
let getFifteen = document.querySelector('.button .fifteen');
getFifteen = 15 / 100;
let getTwentyFive = document.querySelector('.button .twentyFive');
getTwentyFive = 25 / 100;
console.log(getTwentyFive);
let getFifty = document.querySelector('.button .fifty');
getFifty = 50 / 100;
console.log(getFifty);
// let customPercent = document.getElementById('custom').value;
// let newCustomPercent = +customPercent;

const getFivePercent = () => {
	let getBill = document.getElementById('billInput').value;
	let newGetBill = +getBill;
	let getPeople = document.getElementById('peopN').value;
	let newGetPeople = +getPeople;
	if (newGetPeople === 0) {
		document.querySelector('.zeroInput').innerHTML = "Can't be zero!";
		document.querySelector('.peopN').style.borderColor = 'red';
	} else {
		document.getElementById('tipFig').innerHTML = `$ ${(
			(getFive * newGetBill) /
			newGetPeople
		).toFixed(2)}`;
		document.querySelector('.peopN').style.borderColor =
			'hsl(172, 67%, 45%)';
		document.querySelector('.zeroInput').innerHTML = '';
	}
};

const getTenPercent = () => {
	let getBill = document.getElementById('billInput').value;
	let newGetBill = +getBill;
	let getPeople = document.getElementById('peopN').value;
	let newGetPeople = +getPeople;
	if (newGetPeople === 0) {
		document.querySelector('.zeroInput').innerHTML = "Can't be zero!";
		document.querySelector('.peopN').style.borderColor = 'red';
	} else {
		document.getElementById('tipFig').innerHTML = `$ ${(
			(getTen * newGetBill) /
			newGetPeople
		).toFixed(2)}`;
		document.querySelector('.peopN').style.borderColor =
			'hsl(172, 67%, 45%)';
		document.querySelector('.zeroInput').innerHTML = '';
	}
};

const getFifteenPercent = () => {
	let getBill = document.getElementById('billInput').value;
	let newGetBill = +getBill;
	let getPeople = document.getElementById('peopN').value;
	let newGetPeople = +getPeople;
	if (newGetPeople === 0) {
		document.querySelector('.zeroInput').innerHTML = "Can't be zero!";
		document.querySelector('.peopN').style.borderColor = 'red';
	} else {
		document.getElementById('tipFig').innerHTML = `$${(
			(getFifteen * newGetBill) /
			newGetPeople
		).toFixed(2)}`;
		document.getElementById('totFig').innerHTML = `$${(
			((getFifteen * newGetBill) / newGetPeople) *
			7.68
		).toFixed(2)}`;
		document.querySelector('.peopN').style.borderColor =
			'hsl(172, 67%, 45%)';
		document.querySelector('.zeroInput').innerHTML = '';
	}
};

const getTwentyFivePercent = () => {
	let getBill = document.getElementById('billInput').value;
	let newGetBill = +getBill;
	let getPeople = document.getElementById('peopN').value;
	let newGetPeople = +getPeople;
	if (newGetPeople === 0) {
		document.querySelector('.zeroInput').innerHTML = "Can't be zero!";
		document.querySelector('.peopN').style.borderColor = 'red';
	} else {
		document.getElementById('tipFig').innerHTML = `$${(
			(getTwentyFive * newGetBill) /
			newGetPeople
		).toFixed(2)}`;
		document.getElementById('totFig').innerHTML = `$${(
			((getTwentyFive * newGetBill) / newGetPeople) *
			7.68
		).toFixed(2)}`;
		document.querySelector('.peopN').style.borderColor =
			'hsl(172, 67%, 45%)';
		document.querySelector('.zeroInput').innerHTML = '';
	}
};

const getFiftyPercent = () => {
	let getBill = document.getElementById('billInput').value;
	let newGetBill = +getBill;
	let getPeople = document.getElementById('peopN').value;
	let newGetPeople = +getPeople;
	if (newGetPeople === 0) {
		document.querySelector('.zeroInput').innerHTML = "Can't be zero!";
		document.querySelector('.peopN').style.borderColor = 'red';
	} else {
		document.getElementById('tipFig').innerHTML = `$${(
			(getFifty * newGetBill) /
			newGetPeople
		).toFixed(2)}`;
		document.getElementById('totFig').innerHTML = `$${(
			((getFifty * newGetBill) / newGetPeople) *
			7.68
		).toFixed(2)}`;
		document.querySelector('.peopN').style.borderColor =
			'hsl(172, 67%, 45%)';
		document.querySelector('.zeroInput').innerHTML = '';
	}
};

const getCustomCalculation = () => {
	let getBill = document.getElementById('billInput').value;
	let newGetBill = +getBill;
	let customPercent = document.getElementById('custom').value;
	let newCustomPercent = +customPercent;
	console.log('new custom percent', newCustomPercent);
	let getPeople = document.getElementById('peopN').value;
	let newGetPeople = +getPeople;
	if (newGetPeople === 0) {
		document.querySelector('.zeroInput').innerHTML = "Can't be zero!";
		document.querySelector('.peopN').style.borderColor = 'red';
	} else {
		document.getElementById('tipFig').innerHTML = `$${(
			((newCustomPercent / 100) * newGetBill) /
			newGetPeople
		).toFixed(2)}`;
		document.getElementById('totFig').innerHTML = `$${(
			(((newCustomPercent / 100) * newGetBill) / newGetPeople) *
			7.68
		).toFixed(2)}`;
		document.querySelector('.peopN').style.borderColor =
			'hsl(172, 67%, 45%)';
		document.querySelector('.zeroInput').innerHTML = '';
	}
};

const resetCalculator = () => {
	document.getElementById('tipFig').innerHTML = '$' + 0;
	document.getElementById('totFig').innerHTML = '$' + 0;
	document.getElementById('billInput').value = '';
	document.getElementById('peopN').value = '';
	document.getElementById('custom').value = '';
};
