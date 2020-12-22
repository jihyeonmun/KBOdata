var DEFAULT_DATASET_SIZE = 7,
			addedCount = 0,
		    color = Chart.helpers.color;

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	var chartColors = {
		red: 'rgb(255, 99, 132)',
		orange: 'rgb(255, 159, 64)',
		yellow: 'rgb(255, 205, 86)',
		green: 'rgb(75, 192, 192)',
		blue: 'rgb(54, 162, 235)',
		purple: 'rgb(153, 102, 255)',
		grey: 'rgb(231,233,237)'
	};

function randomScalingFactor() {
		return Math.round(Math.random() * 100);
	}

var barData = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: 'Dataset 1',
				backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
				borderColor: chartColors.red,
				borderWidth: 1,
				data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
				]
			}, {
				label: 'Dataset 2',
				backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
				borderColor: chartColors.blue,
				borderWidth: 1,
				data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
				]
			}]

		};
var index = 11;
var ctx = document.getElementById("barChart").getContext("2d");
		var	myNewChartB = new Chart(ctx, {
				type: 'bar',
				data: barData,
				options: {
					responsive: true,
          maintainAspectRation: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Bar Chart'
					}
				}
			});
