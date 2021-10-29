import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
const routes: Routes = [
  { path : 'task',component : TaskComponent},
  { path : 'contactus',component : ContactusComponent},
  { path: '', redirectTo : 'task',  pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
