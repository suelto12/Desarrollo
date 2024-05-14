import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styles: ``
})

export class LoginComponent {
  email:any = null;
  password:any = null;

  constructor(
    public authService: AuthService,
  ) {}

  login(){
    this.authService.login(this.email, this.password).subscribe((resp:any) => {
      console.log(resp);
      if(!resp.error && resp){
        alert(resp.message);
        return;
      }else{
        alert(resp.message);
        return;
      }
    })
  }

}
