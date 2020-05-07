import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'kt-recoverpassword3',
  templateUrl: './recoverpassword3.component.html',
  styleUrls: ['./recoverpassword3.component.scss']
})
export class Recoverpassword3Component implements OnInit {
  email: string = 'abc@gmail.com'
  recover3Form: FormGroup
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRecover3() { }
  submit(e) {
    this.router.navigate(['/auth/awesome', e])
  }
}
