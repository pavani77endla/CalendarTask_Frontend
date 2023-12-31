import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page1', component: Page1Component }, // Define your home component route
  { path: 'page2', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
   routes: Routes = [
    // Other routes
    { path: 'sendJsonEmail', component: Page2Component },
  ];
  
}
