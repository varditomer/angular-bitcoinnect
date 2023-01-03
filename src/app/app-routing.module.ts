import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/signup/signup.component';
import { StatisticComponent } from './views/statistic/statistic.component';

const routes: Routes = [
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    canActivate: [UserGuard]

  },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
    canActivate: [UserGuard]

  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    canActivate: [UserGuard]

  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserGuard]
  },
  { 
    path: '', 
    component: SignupComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
