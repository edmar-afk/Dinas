window.onload = function () {

						var chart = new CanvasJS.Chart("chartContainer", {
							animationEnabled: true,
							theme: "light2", // "light1", "light2", "dark1", "dark2"
							title:{
								text: "Purok Populations"
							},
							axisY: {
								title: "Populations"
							},
							data: [{        
								type: "column",  
								showInLegend: true, 
								legendMarkerColor: "grey",
								legendText: "Populations",
								dataPoints: [      
									{ y: 131, label: "Sampaguita" },
									{ y: 294,  label: "Santan" },
									{ y: 120,  label: "Camia" },
									{ y: 158,  label: "Sunflower" },
									{ y: 76,  label: "Chandelier" },
									{ y: 147, label: "DoÅa luz" },
									{ y: 143,  label: "Orchids" },
									
								]
							}]
						});
						chart.render();

						}