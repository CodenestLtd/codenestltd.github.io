import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerTitle = 'Complete';

  constructor() {
  }

  completeMessage: string;

  ngOnInit(): void {
  }
}
