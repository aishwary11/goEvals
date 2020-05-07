import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { RecruitersService } from '../../../../core/services/recruiters.service'

@Component({
  selector: 'kt-completeprofile',
  templateUrl: './completeprofile.component.html',
  styleUrls: ['./completeprofile.component.scss']
})
export class CompleteprofileComponent implements OnInit {
  completeForm: FormGroup
  googleUserData: string
  constructor(private router: Router, private recruiter: RecruitersService, private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.completeBuilder()
  }
  completeBuilder() {
    this.completeForm = this.fb.group({
      name: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[0-9A-Za-z_.]+@[0-9A-Za-z]+[.][0-9A-Za-z]+')]],
      select: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.maxLength(10)]],
      check: [false, [Validators.requiredTrue]]
    })
  }

  onComplete(form) {
    this.route.params.subscribe(data => {
      this.googleUserData = data.email
      console.log('data aaya ==>>', data)
    })
    form = {
      name: this.completeForm.value.name,
      companyName: this.completeForm.value.companyName,
      email: this.googleUserData,
      // email: this.completeForm.controls['email'].setValue(this.googleUserData),
      // email: this.completeForm.controls['email'].patchValue(this.googleUserData),
      select: this.completeForm.value.select,
      number: this.completeForm.value.number,
      check: this.completeForm.value.check
    }
    console.log(form)
    this.recruiter.googleUser(form).subscribe(data => {
      console.log(data)
    })
  }
}
