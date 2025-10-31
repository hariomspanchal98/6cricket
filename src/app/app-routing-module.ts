import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'timer', loadChildren: () => import('./timer/timer-module').then(m => m.TimerModule) },
  {path: '', redirectTo: '/timer', pathMatch: 'full'},
  {path: '**', redirectTo: '/timer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
