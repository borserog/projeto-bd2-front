import {Component, OnInit} from '@angular/core';
import {BntService} from './services/bnt.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data$: any;

  constructor(
    private bntService: BntService
  ) {
  }

  ngOnInit(): void {
    this.data$ = this.bntService.getData('veiculoproprietario').pipe(
      map(x => x)
    );
  }
}
