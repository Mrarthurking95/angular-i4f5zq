import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TanquearComponent } from './tanquear/tanquear.component';
const routes: Routes=[
  {path:'tanquear',component: TanquearComponent},

  
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents=[TanquearComponent]