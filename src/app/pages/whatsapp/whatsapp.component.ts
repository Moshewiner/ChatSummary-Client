import { Component, OnInit } from '@angular/core';
import { AllMessagesService } from 'src/app/services/whatsapp/all-messages.service';
import { WordsCount } from 'src/app/services/whatsapp/types';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {
  public wordCounts: WordsCount[] = [];
  constructor(private allMessagesService: AllMessagesService) { }

  ngOnInit(): void {
    this.allMessagesService.getWordCount()
      .subscribe((wordCounts: WordsCount[]) => {
        this.wordCounts = wordCounts;
      });
  }
}
