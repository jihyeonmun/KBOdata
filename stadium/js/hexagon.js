var ctx = $("#myChart");

var colors = {
	red: "#DF3312",
	black: "#232F3E",
};

var chart = new Chart(ctx, {
    type: "radar",
	  data: {
        labels: ["Leadership", "Business Case", "Consensus", "Accountability", "Urgency", "Importance", "Capability"],
        datasets: [{
            label: false,
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: false,
						pointRadius: 4,
            backgroundColor: colors.red,
            borderColor: colors.red,
            pointBackgroundColor: colors.red,
            pointBorderColor: "transparent",
            pointHoverBackgroundColor: colors.red,
            pointHoverBorderColor: colors.red,
        }]
    },
    options: {
				plugins: {
					datalabels: {
						// useful tip!
						// you can write functions that dip into the context of what's happening
						// and update stuff dynamically
						
						// trip hover state of label now we're storing the state as a variabel
						color: function(context) {
							return context.hovered ? colors.red : colors.black;
						},
						font:{
							family: 'Amazon Ember',
							size: 13,
							style: 'normal'
						},
						// to push the inline label out to the extremity of the graph we need to fake it
						// by initially setting the anchor and alignment to 'end'
						align: 'end',
						anchor: 'end',
						// then taking the data value, (between 0 and 100), finding the remainder from 100
						// and using this as an inline label, but offset by the correct amount
						offset: function(context) {
							// using the height of the canvas as a base
							// our segment lines are a little short of half the height (look at the top vertical line)
							// so there's a magic number here of height/2.5 as the pixel range for one segment bar
							// so if 100% = this length, our offset is the remaining % (100 - value) of the segment length
							var offset = (context.chart.height / 2.5) * ((100 - context.dataset.data[context.dataIndex])*0.01);
							return offset;
						},
						// then reformatting the label content from the 
						//  value to the label set with the dataset
						formatter: function(value, context) {
							return context.chart.data.labels[context.dataIndex];
						},
						listeners: {
							enter: function(context) {
								// Receives `enter` events for any labels of any dataset. Indices of the
								// clicked label are: `context.datasetIndex` and `context.dataIndex`.
								// For example, we can modify keep track of the hovered state and
								// return `true` to update the label and re-render the chart.
								context.hovered = true;
								return true;
							},
							leave: function(context) {
								context.hovered = false;
								return true;
							},
							click: function(context) {
								var target = context.chart.data.labels[context.dataIndex] + '';
								target = target.replace(' ', '-').toLowerCase();
								var fadeSpeed = 150;
								$('.info.active').fadeOut(fadeSpeed, function(){
									$('.info.active').removeClass('active');
									$('#'+target).fadeIn(fadeSpeed, function(){
										$('#'+target).addClass('active');
									});
								});
								//console.log('clicked: ' + target);
								return true;
							}
						},
					}
				},
				legend: {
					display: false
				},
				tooltips: {
					mode: 'point',
					titleFontSize: 13,
					titleFontFamily: 'Amazon Ember',
					titleFontStyle: 'normal',
					titleMarginBottom: 2,
					cornerRadius: 0,
					backgroundColor: colors.black,
					xPadding: 12,
					yPadding: 8,
					yAlign: 'bottom',
					xAlign: 'center',
					callbacks:{
						title: function(tooltipItem, data){
							return data.labels[tooltipItem[0].index] +': ' + tooltipItem[0].yLabel + '%';
						},
						label: function(tooltipItem, data){
							return false;
						},
					}
				},
			// NOTE!!! as there is only one scale on radar
			// plot, the user 'scales' key is instead 'scale'
			// scale options here: http://www.chartjs.org/docs/latest/axes/radial/linear.html#linear-radial-axis
			scale: {
				// the diagonal segment lines
				angleLines: {
					display: true,
					color: colors.black,
					lineWidth: 1,
				},
				gridLines: {
					lineWidth: 1,
					color: colors.black,
				},
				// the labels at the tip of each data point (we're disabling the default ones)
				// and adding our own hacky ones so we can attach click events
				pointLabels: {
					display: false,
					fontColor: colors.black,
					fontFamily: 'Amazon Ember',
					fontSize: 14,
					callback: function(label){
						return label;
					},
				},
				// the segment lines
				ticks: {
					display: false,		// toggle this on hover!
					fontColor: colors.red,
					fontFamily: 'Amazon Ember',
					fontSize: 14,
					backdropPaddingX: 0,
					backdropPaddingY: 0,
					beginAtZero: true,
					min:			0,
					max:			100,
					//maxTicksLimit: 5,
					stepSize: 20,
					//suggestedMax: 100,
					//suggestedMin: 0,
					showLabelBackdrop: false,
				},
			},
			elements: {
				line: {
					tension: 0,
					borderWidth: 1
				}
			},
			maintainAspectRatio: false,
			// because we're using hacky labels we have to 
			// pad the canvas area a bit to make sure text doesn't run off the edge
			layout: {
				padding: {
					left: 30,
					right: 30,
					top: 30,
					bottom: 30
				}
			}
    },
});