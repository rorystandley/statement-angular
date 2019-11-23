import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import * as pluginDataLabels from "chartjs-plugin-datalabels";

@Component( {
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: [ './chart.component.scss' ]
} )
export class ChartComponent {

	@Input() pieChartLabels: Label[] = [];
	@Input() chartData: number[] = [];
	public pieChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			position: 'top',
		},
		plugins: {
			datalabels: {
				formatter: ( value, ctx ) => {
					const label = ctx.chart.data.labels[ ctx.dataIndex ];
					return label;
				},
			},
		}
	};
	public pieChartPlugins = [ pluginDataLabels ];

	constructor() {

	}
}
