import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddUserComponent } from '../aside-right/add-user/add-user.component'
import { AddUser2Component } from '../aside-right/add-user2/add-user2.component'
import { BillingComponent } from '../aside-right/billing/billing.component'
import { InvoiceComponent } from '../aside-right/invoice/invoice.component'
import { InvoiceListComponent } from '../aside-right/invoice/invoice-list/invoice-list.component'
import { InvoiceDetailsComponent } from '../aside-right/invoice/invoice-details/invoice-details.component'
import { PersonalInterviewComponent } from '../aside-right/personal-interview/personal-interview.component'
import { EmailTemplateComponent } from '../aside-right/email-template/email-template.component'
import { QuestionDatabankComponent } from '../aside-right/question-databank/question-databank.component'
import { SettingsComponent } from '../aside-right/settings/settings.component'
import { HelpComponent } from '../aside-right/help/help.component'

// const routes: Routes = [
//   { path: '/dashboard/', component: AddUserComponent },
//   { path: '/dashboard/add-user', component: AddUser2Component },
//   { path: '/dashboard/billing', component: BillingComponent },
//   {
//     path: '/dashboard/invoice', component: InvoiceComponent, children: [
//       { path: '/dashboard/invoice-list', component: InvoiceListComponent },
//       { path: '/dashboard/invoice-details', component: InvoiceDetailsComponent }
//     ]
//   },
//   { path: '/dashboard/interview', component: PersonalInterviewComponent },
//   { path: '/dashboard/email-template', component: EmailTemplateComponent },
//   { path: '/dashboard/question', component: QuestionDatabankComponent },
//   { path: '/dashboard/settings', component: SettingsComponent },
//   { path: '/dashboard/help', component: HelpComponent },
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AsideLeftRoutingModule { }
