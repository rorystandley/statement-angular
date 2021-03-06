import { Component, OnInit } from '@angular/core';
import { StatementService } from "../../core/services/statement/statement.service";
import { CustomEventEmitterService } from "../../core/services/custom-event-emitter/custom-event-emitter.service";
import { ChartOptions } from "chart.js";
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component( {
	selector: 'app-statements',
	templateUrl: './statements.component.html',
	styleUrls: [ './statements.component.scss' ]
} )
export class StatementsComponent implements OnInit {

	data = [];
	selectedStatement = [];
	chartLabels = [];
	chartData = [];
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

	constructor( private _statementService: StatementService,
	             private _customEventServiceEmitter: CustomEventEmitterService ) {
	}

	ngOnInit() {
		this.getData();

		this._customEventServiceEmitter.notifyObservable$.subscribe( event => {
			if ( event = 'statement:get' ) {
				this.getData();
			}
		} );
	}

	getData() {
		this._statementService.get().subscribe( resp => {
			this.data = resp;
		} );
	}

	selectStatement( row ) {
		this.selectedStatement = row.transactions;
		// Build array of labels
		let labels = [];
		const totals = [];
		this.selectedStatement.forEach( transaction => {
			labels.push( transaction.category );
		} );
		// Now we need to work out the values for all our labels
		labels = [ ...new Set( labels ) ];
		labels.forEach( label => {
			const values = this.selectedStatement
				.filter( statement => {
					return statement.category === label;
				} ).map( ( statement ) => {
					return statement.amount;
				} );
			totals.push( values.reduce( ( a: any, b: any ) =>
				parseFloat( a ) + parseFloat( b ) ) );
		} );
		this.chartLabels = labels;
		this.chartData = totals;
	}

	deleteRow( id ) {
		this._statementService.delete( id ).subscribe( resp => {
			this.getData();
		} );
	}
}
