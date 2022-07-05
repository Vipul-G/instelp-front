import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import * as actions from '../../state/actions'
import { authStateSlector } from '../../state/selectors'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private alive = true;
  loginForm = new FormGroup({
    phoneNumber: new FormControl('8178151102', Validators.required),
    password: new FormControl('1234', Validators.required)
  })

  constructor(private store: Store, private _snackBar: MatSnackBar) { }
 

  ngOnInit(): void {
    
  }

  handleSubmit() {
    if(this.loginForm.invalid) { return }
    const value = this.loginForm.value
    this.store.dispatch(actions.login(value))
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  ngOnDestroy(): void {
    this.alive
  }

}
