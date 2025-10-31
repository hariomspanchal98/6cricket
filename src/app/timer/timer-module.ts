import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { CountDown } from './count-down/count-down';


@NgModule({
  declarations: [
    Dashboard,
    CountDown
  ],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
