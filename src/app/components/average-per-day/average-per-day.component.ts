import { Component, OnInit, Input } from '@angular/core';
import { WeekdaysAverage } from 'src/app/services/whatsapp/types';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-average-per-day',
  templateUrl: './average-per-day.component.html',
  styleUrls: ['./average-per-day.component.scss']
})
export class AveragePerDayComponent implements OnInit {
  @Input() averageMessagesPerDay: WeekdaysAverage[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: { datalabels: { anchor: 'end', align: 'end', } }
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public chart: {
    labels: Label[],
    data: ChartDataSets[],
    colors: object[];
  };

  constructor() { }

  ngOnInit(): void {
    this.chart = {
      labels: this.averageMessagesPerDay.map((average) => average.day),
      data: [{
        label: 'Average Messages Per Day',
        data: this.averageMessagesPerDay.map((average) => average.average),
      }],
      colors: [{
        backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16),
      }]
    };
    console.log(this.chart);
  }

}
