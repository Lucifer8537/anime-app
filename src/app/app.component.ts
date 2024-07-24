import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardViewComponent } from "./card-view/card-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anime-app';
}
