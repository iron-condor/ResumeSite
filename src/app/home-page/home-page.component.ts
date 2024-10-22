import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [NgbModule, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
