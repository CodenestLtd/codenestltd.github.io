import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-complete',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  headerTitle = 'Complete';

  constructor(private challengeService: ChallengeService) {}

  completeMessage: string;

  ngOnInit() {
    this.completeMessage = this.challengeService.getCompleteMessage();
  }
}
