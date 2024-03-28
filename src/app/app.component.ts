import { Component } from '@angular/core';

@Component({
  // is referenced in the index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my app';
}
