import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../menu/side-bar/side-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopBarComponent } from '../menu/top-bar/top-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, MatToolbarModule, TopBarComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
