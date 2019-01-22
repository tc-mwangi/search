import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { LandingComponent } from '../landing/landing.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchComponent } from '../search/search.component';
import { NotFoundComponent } from '../not-found/not-found.component';


// Defining routes
const routes:Routes=[
  {path:"landing",component:LandingComponent},
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchComponent },
  {path:"",redirectTo:"/landing",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
    imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule],
  declarations: []

})
export class RoutingModule { }
