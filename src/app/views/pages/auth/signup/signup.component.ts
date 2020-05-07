import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService, GoogleLoginProvider } from 'ng-dynami-social-login'
import { Router } from '@angular/router'
import { RecruitersService } from '../../../../core/services/recruiters.service'
import { MustMatch } from '../../../../core/helper/must-match.validator'

@Component({
  selector: 'kt-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  googleData: string
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private recruiter: RecruitersService,
  ) { }

  ngOnInit() {
    this.signUpBuilder()
  }

  signUpBuilder() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[0-9A-Za-z_.]+@[0-9A-Za-z]+[.][0-9A-Za-z]+')]],
      password: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      select: ['', [Validators.required]],
      number: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      check: [false, [Validators.requiredTrue]],
    },
      {
        validators: MustMatch('password', 'confirmPassword')
      }
    )
  }

  google() {
    this.signupForm.reset()
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData => {
      // this.googleData = userData.email
      // console.log(this.googleData)
      // this.recruiter.googleUser(userData).subscribe(userData => {
      //   console.log('gmail user saved==>>', userData)
      //   this.router.navigate(['/auth/completeprofile', userData])
      // },
      //   err => {
      //     console.log(err)
      this.router.navigate(['/dashboard'])
      // })
    })
  }

  onSignUp(form) {
    form = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      company_name: this.signupForm.value.company_name,
      select: this.signupForm.value.select,
      number: this.signupForm.value.number,
      confirmPassword: this.signupForm.value.confirmPassword,
      check: this.signupForm.value.check,
    }
    console.log(this.signupForm)
    this.router.navigate(['/auth/otp'])
    // if (this.signupForm.value.password != this.signupForm.value.confirmPassword) {
    //   console.log('Password Doesnt Match')
    //   return false
    // }
    // else {
    //   this.recruiter.signUpUser(form).subscribe(result => {
    //     if (result.status == 400) {
    //       console.log('user exists')
    //     } else {
    //       console.log('heeellloooo', result)
    //       this.router.navigate(['/auth/otp', result])
    //     }
    //   })
    // }
  }

  signIn() {
    this.router.navigate(['/auth/login'])
  }
}
