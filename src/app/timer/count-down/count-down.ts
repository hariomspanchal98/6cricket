import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountdownService } from '../../services/countdown-service';

@Component({
  selector: 'app-count-down',
  standalone: false,
  templateUrl: './count-down.html',
  styleUrl: './count-down.scss',
})
export class CountDown implements OnInit {
  @Input() selectedDate?: Date;
  secondsLeft: number = 0;
  sub?: Subscription;
  loading: boolean = true;

  constructor(private countdownService: CountdownService) { }

  ngOnInit() {
    if (this.selectedDate) {
      this.startCountdown(this.selectedDate);
    }
  }


  startCountdown(date: Date) {
    this.loading = true;
    this.sub = this.countdownService.getCountdown(date).subscribe({
      next: (seconds) => {
        this.secondsLeft = seconds;
      },
      complete: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}