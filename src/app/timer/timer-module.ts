import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { CountDown } from './count-down/count-down';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Dashboard,
    CountDown
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ]
})
export class TimerModule { }
