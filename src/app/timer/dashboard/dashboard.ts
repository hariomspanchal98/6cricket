import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit {
  selectedDate!: Date;

  ngOnInit() {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    this.selectedDate = today;
  }
}
