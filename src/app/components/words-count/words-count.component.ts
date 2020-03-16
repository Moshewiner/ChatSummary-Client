import { Component, OnInit, Input } from '@angular/core';
import { WordsCount } from 'src/app/services/whatsapp/types';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-words-count',
  templateUrl: './words-count.component.html',
  styleUrls: ['./words-count.component.scss']
})
export class WordsCountComponent implements OnInit {
  @Input() wordCounts: WordsCount[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: { datalabels: { anchor: 'end', align: 'end', } }
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public charts: {
    labels: Label[],
    data: ChartDataSets[],
    colors: object[];
  }[] = [];


  ngOnInit(): void {
    this.charts = this.wordCounts.map((wordCount: WordsCount) => {
      return {
        labels: wordCount.keywords.map(keyword => keyword.keyword),
        data: [{
          label: wordCount.author,
          data: wordCount.keywords.map(keyword => keyword.count)
        }],
        colors: [{
          backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16)
        }]
      };
    });
    console.log(this.charts);
  }
}
