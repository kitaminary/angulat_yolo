import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeComponent } from './college/college.component';

const routes: Routes = [
  {
    path: 'college',
    component: CollegeComponent,
  },
  { path: '**', redirectTo: '/notfound' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
