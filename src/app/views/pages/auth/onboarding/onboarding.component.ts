import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'kt-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  onboardForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.onboardBuilder()
  }

  onboardBuilder() {
    this.onboardForm = this.fb.group({
      select1: [''],
      select2: [''],
      select3: [''],
    })
  }

  onBoard(form) {
    form = {
      select1: this.onboardForm.value.select1,
      select2: this.onboardForm.value.select2,
      select3: this.onboardForm.value.select3,
    }
    console.log(form)
    this.router.navigate(['/auth/awesome'])
  }

  later() {
    this.router.navigate(['/auth/awesome'])
  }
}