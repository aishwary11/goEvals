import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { RecruitersService } from '../../../../core/services/recruiters.service'

@Component({
  selector: 'kt-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  userData: string
  otpForm: FormGroup
  constructor(private route: Router, private fb: FormBuilder, private recruiter: RecruitersService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.otpBuilder()
  }

  otpBuilder() {
    this.otpForm = this.fb.group({
      input_1: ['', [Validators.required, Validators.maxLength(1)]],
      input_2: ['', [Validators.required, Validators.maxLength(1)]],
      input_3: ['', [Validators.required, Validators.maxLength(1)]],
      input_4: ['', [Validators.required, Validators.maxLength(1)]],
    })
  }

  onOtp(form) {
    this.rout.params.subscribe(data => console.log('aaya data ===>>>', data))
    form = {
      input_1: this.otpForm.value.input_1,
      input_2: this.otpForm.value.input_2,
      input_3: this.otpForm.value.input_3,
      input_4: this.otpForm.value.input_4,
    }
    console.log(form)
    this.route.navigate(['/auth/onboarding'])
  }
}
