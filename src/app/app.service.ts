import { Injectable } from '@angular/core';
import { NetworkCallService } from './network-call.service';
import { DailyTopics } from 'src/model/daily-topic.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private networkCall: NetworkCallService,) {

  }

  getDailyTopics() {
    return this.networkCall.get<DailyTopics[]>("getDailyTopicList");
  }

  sendNotification(id: string) {
    return this.networkCall.get<any>("send-notification?topicId=" + id);
  }
}
