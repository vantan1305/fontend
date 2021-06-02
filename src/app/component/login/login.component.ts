import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _fb: FormBuilder,
    private LoginService : LoginServiceService,
    private router :Router
    ) { }
  profileForm = this._fb.group(
    {
      username: [''],
      password: [''],
    }
  )
  ngOnInit() {
  }
  showUser() {
    this.LoginService.login(this.profileForm.value).subscribe(req => {
      // alert("Dang nhap thanh cong");
      localStorage.setItem("token",req.token);
      this.router.navigateByUrl('admin')


    },
    err => {
      alert("Tai khoan mat khau ko chinh xac")
    }

    )
  }
}
