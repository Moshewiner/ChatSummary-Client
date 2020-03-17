import { Component, OnInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp/whatsapp.service';
import { WordsCount, WeekdaysAverage } from 'src/app/services/whatsapp/types';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {
  public wordCounts: WordsCount[] = null;
  public averageMessagesPerDay: WeekdaysAverage[] = null;

  constructor(private whatsappService: WhatsappService) { }

  ngOnInit(): void {
    this.whatsappService.getWordCount()
      .subscribe((wordCounts: WordsCount[]) => {
        this.wordCounts = wordCounts;
      });
    this.whatsappService.getAverageMessagesPerDay().subscribe((averageMessagesPerDay: WeekdaysAverage[]) => {
      this.averageMessagesPerDay = averageMessagesPerDay;
    });
  }
}
