import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any ;
  token: any = '';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loadStorage();
    //TIENE QUE CARGARSE USUARIO Y TOKEN DESDE LOCALSTORAGE
   }

  loadStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.user = localStorage.getItem('user');
    }else{
      this.user = null;
      this.token = '';
    }
  }

//////////////////////////////////////////////////////////////////////////////////
//LOGIN
  login(email:string, password:string){
    //crear ruta en el envairoment para la url de la api
    let URL='http://127.0.0.1:8000/api/login';
    return this.http.post(URL, {email, password}).pipe(
      map((resp:any) => {
        if(resp.token){
          return this.SaveLocalStorageResp(resp);
        }else{
          return resp;
        }
      }),
      catchError((err:any) => {
        return of(err);
      })
    );
  }

  SaveLocalStorageResp(resp:any){
    if(resp.user && resp.token){
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user', JSON.stringify(resp.user));
      this.user = resp.user;
      this.token = resp.token;
      // this.router.navigate(['/admin/dashboard']);
    }
  }
//REGISTER
  register(name:string, email:string, password:string){
    //crear ruta en el envairoment para la url de la api
    let URL='http://127.0.0.1:8000/api/user/register';
    return this.http.post(URL, {name, email, password})
  }
//LOGOUT
  logout(){
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }


}
