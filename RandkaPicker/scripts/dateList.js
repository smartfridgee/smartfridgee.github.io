let dateList = [
	{ name: 'Randeczka nad jeziorkiem', alone: 'no', anxiety: 'no', weather: 'yes', strong: 'yes', food: 'no'},
	{ name: 'Randeczka w domciu', alone: 'no', anxiety: 'no', weather: 'no', strong: 'yes', food: 'no'},
	{ name: 'Randeczka w parku', alone: 'no', anxiety: 'no', weather: 'yes', strong: 'yes', food: 'no'},
	{ name: 'Randeczka u mnie', alone: 'no', anxiety: 'no', weather: 'no', strong: 'yes', food: 'no'}
]

let criteria = "yes";

let dateOutput = dateList.filter((item) => {
	return item.weather == criteria;
})

console.log(dateOutput);