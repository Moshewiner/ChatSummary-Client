import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllMessagesService } from 'src/app/services/whatsapp/all-messages.service';
import { WordsCount } from 'src/app/services/whatsapp/types';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public wordCounts: WordsCount[] = [];
  constructor(private allMessagesService: AllMessagesService) { }

  ngOnInit(): void {
    this.allMessagesService.getWordCount()
      .subscribe((wordCounts: WordsCount[]) => {
        this.wordCounts = wordCounts;
      });
  }
}
