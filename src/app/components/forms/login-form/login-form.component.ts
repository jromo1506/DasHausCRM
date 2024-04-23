import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private logingService:LoginServiceService,
    private router:Router
      ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.checkCredentials();
  }


  // Funcion que checa en la bd si existe o no mediante el servicio
  checkCredentials(){
    
    var user = {
      username:this.loginForm?.value.username,
      password:this.loginForm?.value.password,
      userType:""
    }

    this.logingService.login(user).pipe(
      catchError(error => {
        alert("ERROR");
        return throwError('Error en la petición de login');
       
      })
    ).subscribe((res: any) => {
      this.logingService.saveCredentials(res);
      this.waitForLocalStorageAndNavigate();
    });
  }


  waitForLocalStorageAndNavigate() {
    const interval = setInterval(() => {
      const credentials = localStorage.getItem('credential');
      if (credentials) {
        clearInterval(interval); 
        const user = JSON.parse(credentials);
        // console.log(user,"USUARIO");
        this.router.navigate(['/dashboard']); 
      
      }
    }, 1000); 
  }
  


}
