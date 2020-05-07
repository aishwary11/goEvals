// Angular
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// RxJS
import { Observable, Subject } from 'rxjs'
import { finalize, takeUntil, tap } from 'rxjs/operators'
// Translate
import { TranslateService } from '@ngx-translate/core'
// Store
import { Store } from '@ngrx/store'
import { AppState } from '../../../../core/reducers'
// Auth
// import { AuthNoticeService, AuthService, Login } from '../../../../core/auth'
import { AuthService, GoogleLoginProvider } from 'ng-dynami-social-login'

import { RecruitersService } from '../../../../core/services/recruiters.service'
@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	// Public params
	loginForm: FormGroup
	error: string


	constructor(
		private router: Router,
		private fb: FormBuilder,
		private auth: AuthService,
		private recruiter: RecruitersService,
		private recruit: RecruitersService
	) { }


	ngOnInit(): void {
		this.loginBuilder()
	}

	loginBuilder() {
		this.loginForm = this.fb.group({
			email: ['', [Validators.required, Validators.pattern('[0-9A-Za-z_.]+@[0-9A-Za-z]+[.][0-9A-Za-z]+')]],
			password: ['', [Validators.required]],
			check: [false, [Validators.requiredTrue]],
		})
	}

	google() {
		this.loginForm.reset()
		this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData => {
			this.recruiter.googleUser(userData).subscribe(data => {
				console.log('gmail user saved==>>', data)
				setTimeout(() => {
					this.router.navigate(['/auth/onboarding', data])
				}, 2000)
			})
		})
	}

	recoverPassword() {
		this.router.navigate(['/auth/recover-password'])
	}

	onLogin(form) {
		form = {
			email: this.loginForm.value.email,
			password: this.loginForm.value.password,
			check: this.loginForm.value.check
		}
		console.log(form)
		this.recruit.loginUser(form).subscribe(data => {
			console.log(data)
			if (data.status == 400) {
				this.error = 'User not Found'
			}
			else {
				this.router.navigate(['/auth/awesome'])
			}
		})
	}

	signUp() {
		this.router.navigate(['/auth/signup'])
	}
}
