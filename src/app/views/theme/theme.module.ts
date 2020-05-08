import { NgxPermissionsModule } from 'ngx-permissions';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Angular Material
import { MatButtonModule, MatProgressBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
// NgBootstrap
import { NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Translation
import { TranslateModule } from '@ngx-translate/core';
// Loading bar
import { LoadingBarModule } from '@ngx-loading-bar/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Ngx DatePicker
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Core Module
import { CoreModule } from '../../core/core.module';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './brand/brand.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { PartialsModule } from '../partials/partials.module';
import { BaseComponent } from './base/base.component';
import { PagesModule } from '../pages/pages.module';
import { HtmlClassService } from './html-class.service';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
import { PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '../../core/auth';
import { AsideRightComponent } from './aside-right/aside-right.component';
import { HelpComponent } from './aside-right/help/help.component';
import { EmailTemplateComponent } from './aside-right/email-template/email-template.component';
import { QuestionDatabankComponent } from './aside-right/question-databank/question-databank.component';
import { PersonalInterviewComponent } from './aside-right/personal-interview/personal-interview.component';
import { InvoiceComponent } from './aside-right/invoice/invoice.component';
import { BillingComponent } from './aside-right/billing/billing.component';
import { AddUser2Component } from './aside-right/add-user2/add-user2.component';
import { AddUserComponent } from './aside-right/add-user/add-user.component';
import { SettingsComponent } from './aside-right/settings/settings.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { InvoiceListComponent } from './aside-right/invoice/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './aside-right/invoice/invoice-details/invoice-details.component';

@NgModule({
	declarations: [
		BaseComponent,
		FooterComponent,

		// headers
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,

		// subheader
		SubheaderComponent,

		// topbar components
		TopbarComponent,

		// aside left menu components
		AsideLeftComponent,

		// horizontal menu components
		MenuHorizontalComponent,

		ErrorPageComponent,

		AsideRightComponent,

		HelpComponent,

		EmailTemplateComponent,

		QuestionDatabankComponent,

		PersonalInterviewComponent,

		InvoiceComponent,

		BillingComponent,

		AddUser2Component,

		AddUserComponent,

		SettingsComponent,

		DashboardHeaderComponent,

		InvoiceListComponent,

		InvoiceDetailsComponent,
	],
	exports: [
		BaseComponent,
		FooterComponent,

		// headers
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,

		// subheader
		SubheaderComponent,

		// topbar components
		TopbarComponent,

		// aside left menu components
		AsideLeftComponent,

		// horizontal menu components
		MenuHorizontalComponent,

		ErrorPageComponent,
	],
	providers: [
		HtmlClassService,
	],
	imports: [
		CommonModule,
		RouterModule,
		NgxPermissionsModule.forChild(),
		StoreModule.forFeature('roles', rolesReducer),
		StoreModule.forFeature('permissions', permissionsReducer),
		EffectsModule.forFeature([PermissionEffects, RoleEffects]),
		PagesModule,
		PartialsModule,
		CoreModule,
		PerfectScrollbarModule,
		FormsModule,
		MatProgressBarModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule.forChild(),
		LoadingBarModule,
		NgxDaterangepickerMd,
		InlineSVGModule,

		// ng-bootstrap modules
		NgbProgressbarModule,
		NgbTooltipModule,
	]
})
export class ThemeModule {
}
