import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenav, MatSidenavContainer, MatSidenavContent, MatNavList, RouterModule, RouterLinkActive, MatListItem ], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
