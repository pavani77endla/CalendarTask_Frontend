import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
 
})

export class Page1Component {
  constructor(private router: Router) {}
  
  navigateToNextPage() {
    this.router.navigate(['/page2']); // Navigate to the 'next' route
  }
}
