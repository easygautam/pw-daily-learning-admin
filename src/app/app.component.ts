import { Component, inject } from '@angular/core';
import { AppService } from './app.service';
import { DailyTopics } from 'src/model/daily-topic.model';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pw-daily-learning-admin';

  durationInSeconds = 3;


  dailyTopics: DailyTopics[] = []
  isLoading = true

  constructor(private appService: AppService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getAllDailyTopics()
  }

  private getAllDailyTopics() {
    this.isLoading = true
    this.appService.getDailyTopics()
      .subscribe(value => {
        this.isLoading = false
        this.dailyTopics = value
        console.log(value)
      }, error => {
        this.isLoading = false
        window.alert("Failed to load the data")
      })
  }

  onSendNotificationToStudentClick(topic: DailyTopics) {
    topic.isLoading = true
    this.appService.sendNotification(topic._id)
      .subscribe(value => {
        topic.isLoading = false
        console.log(value)
        this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
          duration: this.durationInSeconds * 1000,
        });
      }, error => {
        topic.isLoading = false
        window.alert("Failed to send notification")
      })
  }

}

@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar-annotated-component-example-snack.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
