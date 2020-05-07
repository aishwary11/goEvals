import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MustMatch } from '../../../../core/helper/must-match.validator'
import { Router } from '@angular/router'


@Component({
  selector: 'kt-recoverpassword2',
  templateUrl: './recoverpassword2.component.html',
  styleUrls: ['./recoverpassword2.component.scss']
})
export class Recoverpassword2Component implements OnInit {
  recoverForm2: FormGroup
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.recover2Builder()
  }
  recover2Builder() {
    this.recoverForm2 = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    })
  }

  onRecover2(form) {
    form = {
      password: this.recoverForm2.value.password,
      confirmPassword: this.recoverForm2.value.confirmPassword
    }
    console.log(form)
    if (this.recoverForm2.value.password != this.recoverForm2.value.confirmPassword) {
      console.log('Password Doesnt Match')
      return false
    } else {
      console.log('successful')
      this.router.navigate(['/auth/recover-password-3'])
    }
  }
}
