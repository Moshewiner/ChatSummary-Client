import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllMessagesService } from 'src/app/services/whatsapp/all-messages.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public messages: any[] = [];

  constructor(private allMessagesService: AllMessagesService) { }

  ngOnInit(): void {
    this.allMessagesService.getWordCount()
    .subscribe(messages => {
      this.messages = messages;
    });
  }

}
