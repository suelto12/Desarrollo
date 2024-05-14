import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
