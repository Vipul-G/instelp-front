import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    fullName: new FormControl('Vip', Validators.required),
    phoneNumber: new FormControl('8178151102', Validators.required),
    email: new FormControl('vip@gmail.com', Validators.required),
    password: new FormControl('12345', Validators.required),
    // roles: new FormControl('questioner', Validators.required),
  })
  loading = true;
  error: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    if(this.registerForm.invalid) { return }
    this.authService.register(this.registerForm.value).subscribe((data: any) => {
      this.openSnackBar(data, 'Done')
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
