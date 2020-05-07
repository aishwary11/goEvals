import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { RecruitersService } from '../../../../core/services/recruiters.service'
import { Router } from '@angular/router'


@Component({
  selector: 'kt-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  recoverForm1: FormGroup
  constructor(private fb: FormBuilder, private recruiter: RecruitersService, private router: Router) { }

  ngOnInit() {
    this.recoverBuilder1()
  }

  recoverBuilder1() {
    this.recoverForm1 = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[0-9A-Za-z_.]+@[0-9A-Za-z]+[.][0-9A-Za-z]+')]]
    })
  }

  onRecover1(form) {
    form = {
      email: this.recoverForm1.value.email
    }
    this.recruiter.resetPassword(form).subscribe(data => {
      console.log(data.email)
      this.router.navigate(['/auth/recover-password-2'])
    })
  }
}
