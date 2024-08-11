import { Component } from '@angular/core';
import { AppDataService } from './core/app-data.service';
import { Observable } from 'rxjs';
import { Post } from './common/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-rxjs';

  public postData$?: Observable<Post>;

  constructor(appDataService: AppDataService) {
    this.postData$ = appDataService.getPost();

  }
}
