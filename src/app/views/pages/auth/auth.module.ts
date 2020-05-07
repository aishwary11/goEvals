// Angular
import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
// Material
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material'
// Translate
import { TranslateModule } from '@ngx-translate/core'
// NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
// CRUD
import { InterceptService } from '../../../core/_base/crud/'
// Module components
import { AuthComponent } from './auth.component'
import { LoginComponent } from './login/login.component'
// Auth
import { AuthEffects, AuthGuard, authReducer, AuthService } from '../../../core/auth'
import { AwesomeComponent } from './awesome/awesome.component'
import { OnboardingComponent } from './onboarding/onboarding.component'
import { RecoverPasswordComponent } from './recover-password/recover-password.component'
import { Recoverpassword2Component } from './recoverpassword2/recoverpassword2.component'
import { Recoverpassword3Component } from './recoverpassword3/recoverpassword3.component'
import { OtpComponent } from './otp/otp.component'
import { SignupComponent } from './signup/signup.component'
import { CompleteprofileComponent } from './completeprofile/completeprofile.component'
import { HeaderMainComponent } from './header-main/header-main.component'


const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full',
			},
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'headermain',
				component: HeaderMainComponent
			},
			{
				path: 'awesome',
				component: AwesomeComponent
			},
			{
				path: 'onboarding',
				component: OnboardingComponent
			},
			{
				path: 'recover-password',
				component: RecoverPasswordComponent
			},
			{
				path: 'recover-password-2',
				component: Recoverpassword2Component
			},
			{
				path: 'recover-password-3',
				component: Recoverpassword3Component
			},
			{
				path: 'otp',
				component: OtpComponent
			},
			{
				path: 'signup',
				component: SignupComponent
			},
			{
				path: 'completeprofile',
				component: CompleteprofileComponent
			}
		]
	}
]


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		RouterModule.forChild(routes),
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		TranslateModule.forChild(),
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([AuthEffects])
	],
	providers: [
		InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
		},
	],
	exports: [AuthComponent],
	declarations: [
		AuthComponent,
		LoginComponent,
		OnboardingComponent,
		AwesomeComponent,
		RecoverPasswordComponent,
		Recoverpassword2Component,
		Recoverpassword3Component,
		OtpComponent,
		SignupComponent,
		CompleteprofileComponent,
		HeaderMainComponent
	]
})

export class AuthModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				AuthService,
				AuthGuard
			]
		}
	}
}
