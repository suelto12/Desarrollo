import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  // imports: [
  //   FormsModule,
  //   HttpClientModule,
  //   ReactiveFormsModule,
  //   RouterModule
  // ],
  template: `<p>auth works!</p>`,
  styles: ``
})
export class AuthComponent {

}
